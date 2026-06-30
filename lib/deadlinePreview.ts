const DAY_MS = 24 * 60 * 60 * 1000;
const WEEKDAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function setClock(date: Date, hours: number, minutes = 0) {
  const next = new Date(date);
  next.setHours(hours, minutes, 0, 0);
  return next;
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function parseTime(input: string) {
  const lower = input.toLowerCase();
  if (/\bnoon\b/.test(lower)) return { h: 12, m: 0 };
  if (/\bmidnight\b/.test(lower)) return { h: 0, m: 0 };
  if (/\btonight\b/.test(lower)) return { h: 20, m: 0 };
  if (/\bevening\b/.test(lower)) return { h: 18, m: 0 };
  if (/\bbefore lunch\b/.test(lower)) return { h: 12, m: 0 };
  if (/\bafter class\b/.test(lower)) return { h: 17, m: 0 };
  const meridiem = lower.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/);
  if (meridiem) {
    let h = Number(meridiem[1]);
    if (meridiem[3] === 'pm' && h < 12) h += 12;
    if (meridiem[3] === 'am' && h === 12) h = 0;
    return { h, m: Number(meridiem[2] || 0) };
  }
  const clock = lower.match(/\b([01]?\d|2[0-3]):([0-5]\d)\b/);
  if (clock) return { h: Number(clock[1]), m: Number(clock[2]) };
  const byHour = lower.match(/\b(?:by|at|before)\s+(\d{1,2})\b/);
  if (byHour) {
    const value = Number(byHour[1]);
    return { h: value <= 11 ? value + 12 : value, m: 0 };
  }
  return null;
}

export function previewDeadline(input: string) {
  const lower = input.toLowerCase();
  const now = new Date();
  let date: Date | null = null;
  const relative = lower.match(/\bin\s+(\d+)\s*(minutes?|mins?|hours?|hrs?|days?|weeks?)\b/);
  if (relative) {
    const value = Number(relative[1]);
    const unit = relative[2];
    const multiplier = unit.startsWith('min') ? 60 * 1000 : unit.startsWith('hour') || unit.startsWith('hr') ? 60 * 60 * 1000 : unit.startsWith('week') ? 7 * DAY_MS : DAY_MS;
    date = new Date(now.getTime() + value * multiplier);
  } else if (/\btomorrow\b/.test(lower)) {
    date = setClock(addDays(now, 1), 23, 59);
  } else if (/\btoday\b|\btonight\b/.test(lower)) {
    date = setClock(now, 23, 59);
  } else if (/\bnext week\b/.test(lower)) {
    date = setClock(addDays(now, 7), 23, 59);
  } else if (/\bthis weekend\b|\bweekend\b/.test(lower)) {
    date = setClock(addDays(now, (6 + 7 - now.getDay()) % 7 || 7), 18, 0);
  } else {
    const weekday = WEEKDAYS.findIndex((day) => lower.includes(day));
    if (weekday >= 0) {
      const isNext = lower.includes(`next ${WEEKDAYS[weekday]}`);
      let diff = (weekday + 7 - now.getDay()) % 7;
      if (diff === 0 || isNext) diff += 7;
      date = setClock(addDays(now, diff), 23, 59);
    }
  }
  const time = parseTime(input);
  if (!date && time) date = new Date(now);
  if (!date) return null;
  if (time) date = setClock(date, time.h, time.m);
  if (!relative && time && date <= now && !/\btomorrow\b|\bnext\b|weekend|monday|tuesday|wednesday|thursday|friday|saturday|sunday/.test(lower)) {
    date = addDays(date, 1);
  }
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  const diff = Math.round((target.getTime() - today.getTime()) / DAY_MS);
  const dateLabel = diff === 0 ? 'Today' : diff === 1 ? 'Tomorrow' : date.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });
  return {
    date,
    dateLabel,
    timeLabel: date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
  };
}
