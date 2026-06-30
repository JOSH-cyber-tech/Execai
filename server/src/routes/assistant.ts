import { Router } from 'express';
import { requireAuth } from '@clerk/express';
import { PrismaClient, Priority, TaskStatus } from '../lib/prisma';
import { getOrCreateCurrentUser } from '../lib/currentUser';
import { AIService } from '../services/ai.service';
import { generateStudyPlan, persistStudyPlan } from '../services/scheduling.service';
import { getReminderSnapshot } from '../services/reminder.service';
import { calculatePriority, calculateRisk, buildCoachSummary } from '../services/productivity.service';

const router = Router();
const prisma = new PrismaClient();

const ROUTES: Record<string, string> = {
  dashboard: '/',
  today: '/',
  tasks: '/tasks',
  'today tasks': '/tasks',
  calendar: '/schedule',
  schedule: '/schedule',
  deadlines: '/tasks',
  analytics: '/analytics',
  settings: '/',
  'completed tasks': '/tasks',
  'focus mode': '/schedule',
};

function routeFor(input: string) {
  const lower = input.toLowerCase();
  const key = Object.keys(ROUTES).find((route) => lower.includes(route));
  return key ? ROUTES[key] : undefined;
}

function completionCommand(input: string) {
  return /^(mark|finish|finished|complete|completed|done)\b/i.test(input);
}

function percentCommand(input: string) {
  return input.match(/update\s+(.+?)\s+to\s+(\d{1,3})%/i);
}

function isPlanningRequest(input: string) {
  const lower = input.toLowerCase();
  if (/^(add|create|new)\b/.test(lower)) return false;
  if (/\b(plan|planner|timetable|reschedule|rebalance|schedule my|create.*schedule)\b/.test(lower)) return true;
  if (/\bi have\b.*\b(days?|weeks?|exam|tasks?)\b/.test(lower)) return true;
  return false;
}

router.post('/command', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    const input = String(req.body.input || '').trim();
    if (!input) return res.status(400).json({ error: 'Input is required' });

    const route = routeFor(input);
    if (/^(open|show|go to|view)\b/i.test(input) && route) {
      return res.json({ type: 'navigation', route, message: `Opening ${route === '/' ? 'dashboard' : route.slice(1)}.` });
    }

    const percent = percentCommand(input);
    if (percent) {
      const title = percent[1].trim();
      const value = Math.min(100, Math.max(0, Number(percent[2])));
      const task = await prisma.task.findFirst({
        where: { userId: user.id, title: { contains: title, mode: 'insensitive' } },
        orderBy: { updatedAt: 'desc' },
      });
      if (!task) return res.json({ type: 'message', message: `I couldn't find a task matching "${title}".` });

      const updated = await prisma.task.update({
        where: { id: task.id },
        data: {
          status: value >= 100 ? 'COMPLETED' : 'IN_PROGRESS',
          completedAt: value >= 100 ? new Date() : null,
          description: `${task.description || ''}\nProgress: ${value}%`.trim(),
        },
      });
      return res.json({ type: 'task_updated', task: updated, message: `Updated ${updated.title} to ${value}%.` });
    }

    if (completionCommand(input)) {
      const title = input.replace(/^(mark|finish|finished|complete|completed|done)\s+/i, '').replace(/\s+complete$/i, '').trim();
      const task = await prisma.task.findFirst({
        where: { userId: user.id, title: { contains: title, mode: 'insensitive' } },
        orderBy: { updatedAt: 'desc' },
      });
      if (task) {
        const updated = await prisma.task.update({
          where: { id: task.id },
          data: { status: 'COMPLETED', completedAt: new Date() },
        });
        return res.json({ type: 'task_updated', task: updated, message: `Marked ${updated.title} complete.` });
      }
    }

    if (isPlanningRequest(input)) {
      const blocks = await generateStudyPlan(prisma, user.id, 7);
      const saved = await persistStudyPlan(prisma, user.id, blocks);
      return res.json({
        type: 'study_plan',
        blocks: saved,
        message: saved.length
          ? `I created ${saved.length} study blocks and balanced them around deadlines and priority.`
          : 'There are no pending tasks to schedule yet.',
      });
    }

    const parsed = await AIService.parseTask(input);
    const deadline = parsed.deadline ? new Date(parsed.deadline) : null;
    const priority = String(parsed.priority || 'medium').toUpperCase();
    const priorityLabel = (['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].includes(priority) ? priority : 'MEDIUM') as Priority;
    const history = await prisma.task.findMany({ where: { userId: user.id }, orderBy: { updatedAt: 'desc' }, take: 75 });
    const draft = {
      title: parsed.title || input,
      description: parsed.description || input,
      estimatedMinutes: parsed.estimatedMinutes || parsed.timeEstimate || 30,
      priorityLabel,
      deadline,
      completedAt: null,
      status: TaskStatus.PENDING,
    };
    const priorityResult = calculatePriority(draft as any, history as any);
    const risk = calculateRisk(draft as any, history as any);

    const task = await prisma.task.create({
      data: {
        userId: user.id,
        title: draft.title,
        description: parsed.description || input,
        aiExtracted: true,
        estimatedMinutes: draft.estimatedMinutes,
        priorityLabel: priorityResult.label,
        priorityScore: priorityResult.score,
        deadline,
        scheduledFor: deadline,
        status: 'PENDING',
        riskLevel: risk.level,
        riskReason: `${priorityResult.reason} ${risk.reason}`,
        isRecurring: Boolean(parsed.recurrence),
        recurrenceRule: parsed.recurrence || null,
      },
    });

    return res.status(201).json({
      type: 'task_created',
      task: { ...task, deadlinePreview: parsed.deadlinePreview, priorityReason: priorityResult.reason, riskDetails: risk },
      message: 'Task Added Successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/plan', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });
    const blocks = await generateStudyPlan(prisma, user.id, Number(req.body.days || 7));
    const saved = await persistStudyPlan(prisma, user.id, blocks);
    res.json({ blocks: saved });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/checkin', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    const now = new Date();
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date(todayStart);
    todayEnd.setDate(todayEnd.getDate() + 1);

    const [tasks, schedule, reminders, logs] = await Promise.all([
      prisma.task.findMany({ where: { userId: user.id }, orderBy: [{ deadline: 'asc' }, { priorityScore: 'desc' }] }),
      prisma.scheduleBlock.findMany({
        where: { userId: user.id, startTime: { gte: todayStart, lt: todayEnd } },
        orderBy: { startTime: 'asc' },
      }),
      getReminderSnapshot(prisma, user.id),
      prisma.productivityLog.findMany({ where: { userId: user.id }, orderBy: { date: 'asc' }, take: 31 }),
    ]);

    const pending = tasks.filter((task) => task.status !== 'COMPLETED');
    const dueToday = pending.filter((task) => task.deadline && task.deadline >= todayStart && task.deadline < todayEnd);
    const completedToday = tasks.filter((task) => task.completedAt && task.completedAt >= todayStart);
    const focusMinutes = schedule.reduce((sum, block) => sum + Math.max(0, block.endTime.getTime() - block.startTime.getTime()) / 60000, 0);
    const score = tasks.length === 0 ? 100 : Math.round((completedToday.length / Math.max(1, dueToday.length + completedToday.length)) * 100);
    const coach = buildCoachSummary(logs, tasks as any);

    res.json({
      greeting: now.getHours() < 12 ? 'Good Morning!' : 'Welcome back!',
      focus: dueToday.slice(0, 3),
      deadlines: dueToday,
      pendingWork: pending.slice(0, 6),
      schedule,
      remainingStudyHours: Math.round((focusMinutes / 60) * 10) / 10,
      productivityScore: score,
      coach,
      missedTasks: reminders.filter((reminder) => reminder.type === 'missed_session' || reminder.type === 'task_overdue'),
      reminders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/monitor', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });
    res.json({ reminders: await getReminderSnapshot(prisma, user.id) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
