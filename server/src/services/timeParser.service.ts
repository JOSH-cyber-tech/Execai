const DAY_MS = 24 * 60 * 60 * 1000;

type ParseOptions = {
  now?: Date;
  timezone?: string;
};

export type ParsedDeadline = {
  iso: string | null;
  hasDeadline: boolean;
  label: string | null;
  dateLabel: string | null;
  timeLabel: string | null;
  confidence: number;
  source: string | null;
};

const WEEKDAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const MONTHS: Record<string, number> = {
  jan: 0, january: 0,
  feb: 1, february: 1,
  mar: 2, march: 2,
  apr: 3, april: 3,
  may: 4,
  jun: 5, june: 5,
  jul: 6, july: 6,
  aug: 7, august: 7,
  sep: 8, sept: 8, september: 8,
  oct: 9, october: 9,
  nov: 10, november: 10,
  dec: 11, december: 11,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function startOfDay(date: Date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function setClock(date: Date, hours: number, minutes = 0) {
  const next = new Date(date);
  next.setHours(hours, minutes, 0, 0);
  return next;
}

function endOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 0, 0);
}

function parseTime(input: string) {
  const lower = input.toLowerCase();
  if (/\bnoon\b/.test(lower)) return { hours: 12, minutes: 0, source: 'noon' };
  if (/\bmidnight\b/.test(lower)) return { hours: 0, minutes: 0, source: 'midnight' };
  if (/\bbefore lunch\b|\blunch\b/.test(lower)) return { hours: 12, minutes: 0, source: 'lunch' };
  if (/\bafter class\b/.test(lower)) return { hours: 17, minutes: 0, source: 'after class' };
  if (/\btonight\b/.test(lower)) return { hours: 20, minutes: 0, source: 'tonight' };
  if (/\bevening\b/.test(lower)) return { hours: 18, minutes: 0, source: 'evening' };
  if (/\bmorning\b/.test(lower)) return { hours: 9, minutes: 0, source: 'morning' };

  const meridiem = lower.match(/\b(?:by|at|before|around)?\s*(\d{1,2})(?::(\d{2}))?\s*(a\.?m\.?|p\.?m\.?)\b/);
  if (meridiem) {
    let hours = Number(meridiem[1]);
    const minutes = Number(meridiem[2] || 0);
    const suffix = meridiem[3].replace(/\./g, '');
    if (suffix === 'pm' && hours < 12) hours += 12;
    if (suffix === 'am' && hours === 12) hours = 0;
    return { hours: clamp(hours, 0, 23), minutes: clamp(minutes, 0, 59), source: meridiem[0].trim() };
  }

  const clock24 = lower.match(/\b(?:by|at|before|around)?\s*([01]?\d|2[0-3]):([0-5]\d)\b/);
  if (clock24) {
    return { hours: Number(clock24[1]), minutes: Number(clock24[2]), source: clock24[0].trim() };
  }

  const compact = lower.match(/\b(?:by|at|before|around)\s+(\d{1,2})\b/);
  if (compact) {
    const value = Number(compact[1]);
    if (value >= 1 && value <= 11) return { hours: value + 12, minutes: 0, source: compact[0].trim() };
    if (value <= 23) return { hours: value, minutes: 0, source: compact[0].trim() };
  }

  return null;
}

function parseExplicitDate(input: string, now: Date) {
  const lower = input.toLowerCase();
  const match = lower.match(/\b(\d{1,2})(?:st|nd|rd|th)?\s+(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t|tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)(?:\s+(\d{4}))?\b/);
  if (!match) return null;
  const day = Number(match[1]);
  const month = MONTHS[match[2]];
  let year = match[3] ? Number(match[3]) : now.getFullYear();
  let date = new Date(year, month, day, 23, 59, 0, 0);
  if (!match[3] && date < startOfDay(now)) {
    year += 1;
    date = new Date(year, month, day, 23, 59, 0, 0);
  }
  return { date, source: match[0] };
}

function parseDate(input: string, now: Date) {
  const lower = input.toLowerCase();
  const explicit = parseExplicitDate(lower, now);
  if (explicit) return explicit;

  if (/\btoday\b/.test(lower)) return { date: setClock(now, 23, 59), source: 'today' };
  if (/\btomorrow\b/.test(lower)) return { date: setClock(addDays(now, 1), 23, 59), source: 'tomorrow' };
  if (/\btonight\b/.test(lower)) return { date: setClock(now, 20, 0), source: 'tonight' };
  if (/\bnext week\b/.test(lower)) return { date: setClock(addDays(now, 7), 23, 59), source: 'next week' };
  if (/\bthis weekend\b|\bweekend\b/.test(lower)) {
    const saturdayDiff = (6 + 7 - now.getDay()) % 7 || 7;
    return { date: setClock(addDays(now, saturdayDiff), 18, 0), source: 'this weekend' };
  }
  if (/\bend of (the )?month\b/.test(lower)) return { date: endOfMonth(now), source: 'end of month' };

  const relative = lower.match(/\bin\s+(\d+)\s*(minutes?|mins?|hours?|hrs?|days?|weeks?)\b/);
  if (relative) {
    const value = Number(relative[1]);
    const unit = relative[2];
    const multiplier = unit.startsWith('min') ? 60 * 1000 : unit.startsWith('hour') || unit.startsWith('hr') ? 60 * 60 * 1000 : unit.startsWith('week') ? 7 * DAY_MS : DAY_MS;
    return { date: new Date(now.getTime() + value * multiplier), source: relative[0] };
  }

  const isNext = /\bnext\s+/.test(lower);
  const weekdayIndex = WEEKDAYS.findIndex((day) => new RegExp(`\\b${isNext ? `next\\s+${day}` : day}\\b`).test(lower));
  if (weekdayIndex >= 0) {
    let diff = (weekdayIndex + 7 - now.getDay()) % 7;
    if (diff === 0 || isNext) diff += 7;
    return { date: setClock(addDays(now, diff), 23, 59), source: `${isNext ? 'next ' : ''}${WEEKDAYS[weekdayIndex]}` };
  }

  return null;
}

function formatDateLabel(date: Date, now: Date) {
  const start = startOfDay(now).getTime();
  const target = startOfDay(date).getTime();
  const diff = Math.round((target - start) / DAY_MS);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Tomorrow';
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
}

function formatTimeLabel(date: Date) {
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

export function parseNaturalLanguageDeadline(input: string, options: ParseOptions = {}): ParsedDeadline {
  const now = options.now || new Date();
  const parsedDate = parseDate(input, now);
  const parsedTime = parseTime(input);

  if (!parsedDate && !parsedTime) {
    return { iso: null, hasDeadline: false, label: null, dateLabel: null, timeLabel: null, confidence: 0, source: null };
  }

  let deadline = parsedDate?.date ? new Date(parsedDate.date) : startOfDay(now);
  if (parsedTime) {
    deadline = setClock(deadline, parsedTime.hours, parsedTime.minutes);
  }

  if (!parsedDate && parsedTime && deadline <= now) {
    deadline = addDays(deadline, 1);
  }

  const dateLabel = formatDateLabel(deadline, now);
  const timeLabel = formatTimeLabel(deadline);
  return {
    iso: deadline.toISOString(),
    hasDeadline: true,
    label: `${dateLabel} ${timeLabel}`,
    dateLabel,
    timeLabel,
    confidence: parsedDate && parsedTime ? 0.95 : 0.82,
    source: [parsedDate?.source, parsedTime?.source].filter(Boolean).join(' ') || null,
  };
}

export function stripDeadlineLanguage(input: string) {
  return input
    .replace(/\b(?:by|before|at|on|around)\s+\d{1,2}(?::\d{2})?\s*(?:a\.?m\.?|p\.?m\.?)?\b/ig, '')
    .replace(/\b(?:today|tomorrow|tonight|next week|this weekend|weekend|end of (?:the )?month|noon|midnight|before lunch|after class)\b/ig, '')
    .replace(/\bnext\s+(?:sunday|monday|tuesday|wednesday|thursday|friday|saturday)\b/ig, '')
    .replace(/\b(?:sunday|monday|tuesday|wednesday|thursday|friday|saturday)(?:\s+morning|\s+evening)?\b/ig, '')
    .replace(/\bin\s+\d+\s*(?:minutes?|mins?|hours?|hrs?|days?|weeks?)\b/ig, '')
    .replace(/\b\d{1,2}(?:st|nd|rd|th)?\s+(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t|tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)(?:\s+\d{4})?\b/ig, '')
    .replace(/\s+/g, ' ')
    .trim();
}
