import { PrismaClient, ScheduleBlock, Task } from '../lib/prisma';
import { buildSmartReminder } from './productivity.service';

export type Reminder = {
  id: string;
  title: string;
  message: string;
  type: string;
  notifyAt?: Date;
  taskId?: string;
  actions?: string[];
  riskLevel?: string;
  workload?: { today: number; tomorrow: number; delayed: number };
};

const HOUR_MS = 60 * 60 * 1000;

export function buildTaskReminders(tasks: Task[], now = new Date(), history: Task[] = []): Reminder[] {
  return tasks.flatMap((task) => {
    if (!task.deadline || task.status === 'COMPLETED') return [];
    const hoursLeft = (task.deadline.getTime() - now.getTime()) / HOUR_MS;
    const smart = buildSmartReminder(task as any, history as any, now);
    const base = {
      taskId: task.id,
      actions: ['open_app', 'start_timer', 'snooze', 'dismiss'],
      riskLevel: smart.risk.level.toLowerCase(),
      workload: smart.workload,
    };
    if (hoursLeft < 0) {
      return [{
        id: `task-overdue-${task.id}`,
        title: `${task.title} is overdue`,
        message: smart.message,
        type: 'task_overdue',
        ...base,
      }];
    }
    if (hoursLeft <= 2) {
      return [{
        id: `task-due-2h-${task.id}`,
        title: `Deep Work: ${task.title}`,
        message: smart.message,
        type: 'deadline_soon',
        ...base,
      }];
    }
    if (hoursLeft <= 24) {
      return [{
        id: `task-due-24h-${task.id}`,
        title: smart.title,
        message: smart.message,
        type: 'deadline_risk',
        ...base,
      }];
    }
    return [];
  });
}

export function buildScheduleReminders(blocks: ScheduleBlock[], now = new Date()): Reminder[] {
  return blocks.flatMap((block) => {
    const minutesUntilStart = Math.round((block.startTime.getTime() - now.getTime()) / 60000);
    const missed = block.endTime < now;
    if (missed) {
      return [{
        id: `missed-block-${block.id}`,
        title: `Missed ${block.title}`,
        message: 'Would you like to reschedule this study session?',
        type: 'missed_session',
      }];
    }
    if (minutesUntilStart <= 15 && minutesUntilStart >= 0) {
      return [{
        id: `block-starts-${block.id}`,
        title: `Deep Work starts in ${minutesUntilStart || 1} minutes`,
        message: `${block.title} is ready. Open ExecAI, start the timer, or snooze if needed.`,
        type: 'study_block_starting',
        actions: ['open_app', 'start_timer', 'snooze', 'dismiss'],
      }];
    }
    return [];
  });
}

export async function getReminderSnapshot(prisma: PrismaClient, userId: string) {
  const now = new Date();
  const [tasks, blocks, history] = await Promise.all([
    prisma.task.findMany({ where: { userId, status: { not: 'COMPLETED' } } }),
    prisma.scheduleBlock.findMany({
      where: {
        userId,
        startTime: { gte: new Date(now.getTime() - 3 * HOUR_MS), lte: new Date(now.getTime() + 24 * HOUR_MS) },
      },
      orderBy: { startTime: 'asc' },
    }),
    prisma.task.findMany({ where: { userId }, orderBy: { updatedAt: 'desc' }, take: 75 }),
  ]);

  return [...buildTaskReminders(tasks, now, history), ...buildScheduleReminders(blocks, now)];
}
