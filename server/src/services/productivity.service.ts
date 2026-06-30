import { Priority, RiskLevel, Task, TaskStatus } from '../lib/prisma';

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;

type CompletionLike = Pick<Task, 'status' | 'deadline' | 'completedAt' | 'estimatedMinutes' | 'priorityLabel' | 'title' | 'description'>;

export type PriorityResult = {
  score: number;
  label: Priority;
  reason: string;
};

export type RiskResult = {
  level: RiskLevel;
  likelihood: number;
  remainingHours: number;
  recommendedDailyHours: number;
  reason: string;
};

export type CoachSummary = {
  productivityScore: number;
  consistencyScore: number;
  dailySummary: string;
  weeklySummary: string;
  monthlySummary: string;
  motivationMessage: string;
  recommendation: string;
  focusDropInsight: string;
  paceInsight: string;
};

function clamp(value: number, min = 0, max = 100) {
  return Math.min(max, Math.max(min, value));
}

function hoursUntil(date: Date | null, now = new Date()) {
  if (!date) return Number.POSITIVE_INFINITY;
  return (date.getTime() - now.getTime()) / HOUR_MS;
}

function daysUntil(date: Date | null, now = new Date()) {
  return hoursUntil(date, now) / 24;
}

function keywordImportance(task: Pick<Task, 'title' | 'description' | 'priorityLabel'>) {
  const text = `${task.title || ''} ${task.description || ''}`.toLowerCase();
  let score = 16;
  if (/\b(interview|exam|assignment|deadline|project|hackathon|presentation|client|backend|api|dsa|study)\b/.test(text)) score += 16;
  if (/\b(urgent|critical|asap|important|must|final|submit)\b/.test(text)) score += 12;
  if (/\b(gym|workout|habit|renewal|birthday|netflix|watch)\b/.test(text)) score -= 6;
  if (task.priorityLabel === Priority.CRITICAL) score += 16;
  if (task.priorityLabel === Priority.HIGH) score += 10;
  if (task.priorityLabel === Priority.LOW) score -= 8;
  return clamp(score, 0, 35);
}

function deadlineScore(deadline: Date | null, now = new Date()) {
  if (!deadline) return 4;
  const hours = hoursUntil(deadline, now);
  if (hours < 0) return 30;
  if (hours <= 6) return 28;
  if (hours <= 24) return 25;
  if (hours <= 72) return 21;
  if (hours <= 7 * 24) return 15;
  if (hours <= 14 * 24) return 10;
  return 5;
}

function behaviorScore(task: CompletionLike, history: CompletionLike[], now = new Date()) {
  const similar = history.filter((item) => {
    const source = `${item.title} ${item.description || ''}`.toLowerCase();
    const target = `${task.title} ${task.description || ''}`.toLowerCase();
    return source.split(/\W+/).some((word) => word.length > 4 && target.includes(word));
  });
  const late = similar.filter((item) => item.deadline && item.completedAt && item.completedAt > item.deadline).length;
  const early = similar.filter((item) => item.deadline && item.completedAt && item.completedAt < item.deadline).length;
  const postponedSignal = /postpon|delay|reschedul|later/.test(`${task.description || ''} ${task.title}`.toLowerCase()) ? 2 : 0;
  const overdue = task.deadline && task.deadline < now ? 5 : 0;
  return clamp(late * 4 + postponedSignal * 4 + overdue - early * 2, 0, 15);
}

export function calculatePriority(task: CompletionLike, history: CompletionLike[] = [], now = new Date()): PriorityResult {
  if (task.status === TaskStatus.COMPLETED) {
    return { score: 0, label: Priority.LOW, reason: 'Already completed.' };
  }

  const urgency = deadlineScore(task.deadline, now);
  const importance = keywordImportance(task);
  const distance = task.deadline ? clamp(25 - Math.max(0, daysUntil(task.deadline, now)) * 2.5, 0, 25) : 6;
  const behavior = behaviorScore(task, history, now);
  const score = Math.round(clamp(urgency + importance + distance + behavior));
  const label = score >= 90 ? Priority.CRITICAL : score >= 72 ? Priority.HIGH : score >= 42 ? Priority.MEDIUM : Priority.LOW;

  const reasons = [];
  const hours = hoursUntil(task.deadline, now);
  if (task.deadline && hours <= 24 && hours >= 0) reasons.push('Deadline within 24 hours');
  else if (task.deadline && hours < 0) reasons.push('Deadline has passed');
  else if (task.deadline && daysUntil(task.deadline, now) <= 7) reasons.push('Deadline this week');
  if (importance >= 28) reasons.push('High importance keywords');
  if (behavior >= 8) reasons.push('History shows delays or late completions');
  if (!reasons.length) reasons.push('Balanced urgency, importance, and completion history');

  return { score, label, reason: reasons.join('. ') + '.' };
}

export function calculateRisk(task: CompletionLike, history: CompletionLike[] = [], now = new Date()): RiskResult {
  if (!task.deadline || task.status === TaskStatus.COMPLETED) {
    return { level: RiskLevel.NONE, likelihood: 0, remainingHours: 0, recommendedDailyHours: 0, reason: 'No active deadline risk.' };
  }

  const remainingHours = Math.max(0.5, (task.estimatedMinutes || 45) / 60);
  const remainingTimeHours = Math.max(0, hoursUntil(task.deadline, now));
  const days = Math.max(1, Math.ceil(remainingTimeHours / 24));
  const completed = history.filter((item) => item.status === TaskStatus.COMPLETED);
  const avgCompletionHours = completed.length
    ? completed.reduce((sum, item) => sum + ((item.estimatedMinutes || 45) / 60), 0) / completed.length
    : 1.25;
  const capacityPerDay = Math.max(0.75, avgCompletionHours * 2);
  const requiredDailyHours = remainingHours / days;
  const pressure = remainingTimeHours <= 0 ? 1 : remainingHours / Math.max(0.5, remainingTimeHours);
  const capacityPressure = requiredDailyHours / capacityPerDay;
  const likelihood = Math.round(clamp((pressure * 70) + (capacityPressure * 30)));

  const level = likelihood >= 82 || remainingTimeHours <= 0
    ? RiskLevel.CRITICAL
    : likelihood >= 62
      ? RiskLevel.HIGH
      : likelihood >= 34
        ? RiskLevel.MEDIUM
        : RiskLevel.LOW;

  return {
    level,
    likelihood,
    remainingHours: Math.round(remainingHours * 10) / 10,
    recommendedDailyHours: Math.round(requiredDailyHours * 10) / 10,
    reason: `${Math.round(remainingTimeHours)} hours remain for about ${Math.round(remainingHours * 10) / 10} hours of work.`,
  };
}

export function buildSmartReminder(task: CompletionLike, history: CompletionLike[] = [], now = new Date()) {
  const risk = calculateRisk(task, history, now);
  const daysLeft = task.deadline ? Math.max(0, Math.ceil(daysUntil(task.deadline, now))) : null;
  const work = Math.max(0.5, (task.estimatedMinutes || 45) / 60);
  const today = daysLeft ? Math.round((work / Math.max(1, daysLeft)) * 10) / 10 : work;
  const tomorrow = daysLeft ? Math.round((work / Math.max(1, daysLeft - 1)) * 10) / 10 : work;
  const delayed = daysLeft ? Math.round((work / Math.max(1, daysLeft - 2)) * 10) / 10 : work;

  return {
    title: risk.level === RiskLevel.HIGH || risk.level === RiskLevel.CRITICAL ? `Deadline risk increased to ${risk.level}` : `Stay on schedule: ${task.title}`,
    message: `${task.title} ${daysLeft === null ? 'needs a focused session.' : `is due in ${daysLeft} day${daysLeft === 1 ? '' : 's'}.`} Start today: ${today}h/day. Tomorrow: ${tomorrow}h/day. Two-day delay: ${delayed}h/day.`,
    workload: { today, tomorrow, delayed },
    risk,
  };
}

export function buildCoachSummary(logs: Array<{ tasksCompleted: number; tasksPlanned: number; focusMinutes: number; completionRate: number; date: Date }>, tasks: CompletionLike[]): CoachSummary {
  const recent = logs.slice(-7);
  const previous = logs.slice(-14, -7);
  const today = logs[logs.length - 1];
  const yesterday = logs[logs.length - 2];
  const weeklyCompletion = recent.length ? recent.reduce((sum, log) => sum + log.completionRate, 0) / recent.length : 0;
  const previousCompletion = previous.length ? previous.reduce((sum, log) => sum + log.completionRate, 0) / previous.length : weeklyCompletion;
  const delta = Math.round(weeklyCompletion - previousCompletion);
  const activeDays = recent.filter((log) => log.tasksCompleted > 0 || log.focusMinutes > 0).length;
  const consistencyScore = Math.round((activeDays / Math.max(1, recent.length || 7)) * 100);
  const pending = tasks.filter((task) => task.status !== TaskStatus.COMPLETED);
  const topTask = pending.sort((a, b) => calculatePriority(b, tasks).score - calculatePriority(a, tasks).score)[0];
  const productivityScore = Math.round(clamp(weeklyCompletion * 0.65 + consistencyScore * 0.35));

  return {
    productivityScore,
    consistencyScore,
    dailySummary: yesterday ? `You completed ${yesterday.tasksCompleted} task${yesterday.tasksCompleted === 1 ? '' : 's'} yesterday.` : 'Your daily baseline starts as soon as you complete a task.',
    weeklySummary: delta >= 0 ? `You are ${Math.abs(delta)}% more productive than last week.` : `You are ${Math.abs(delta)}% below last week, so today should stay focused.`,
    monthlySummary: `${tasks.filter((task) => task.status === TaskStatus.COMPLETED).length} total tasks completed across your workspace.`,
    motivationMessage: productivityScore >= 75 ? 'Momentum is strong. Protect your best focus block today.' : 'One clean session today can reset the trend.',
    recommendation: topTask ? `Finish ${topTask.title}. Estimated duration: ${Math.round((topTask.estimatedMinutes || 45) / 30) / 2} hours.` : 'Add one meaningful task to give the coach a target.',
    focusDropInsight: 'Your focus signal is strongest before lunch when sessions are scheduled early.',
    paceInsight: today && today.completionRate >= 80 ? 'At this pace you are tracking ahead of plan.' : 'Start today to avoid compressing work into the deadline window.',
  };
}
