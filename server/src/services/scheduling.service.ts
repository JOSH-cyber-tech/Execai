import { BlockType, PrismaClient, Priority, Task, TaskStatus } from '../lib/prisma';

export type StudyPlanBlock = {
  taskId?: string;
  title: string;
  startTime: Date;
  endTime: Date;
  blockType: BlockType;
};

type Preferences = {
  freeTimeStart?: string;
  freeTimeEnd?: string;
  studyHoursDaily?: number;
};

const DAY_MS = 24 * 60 * 60 * 1000;
const BREAK_MINUTES = 15;
const MAX_BLOCK_MINUTES = 120;

function minutesFromClock(value = '19:00') {
  const [hours, minutes] = value.split(':').map(Number);
  return (hours || 0) * 60 + (minutes || 0);
}

function dateAtMinutes(base: Date, minutes: number) {
  const next = new Date(base);
  next.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0);
  return next;
}

function priorityWeight(priority: Priority) {
  if (priority === Priority.CRITICAL) return 4;
  if (priority === Priority.HIGH) return 3;
  if (priority === Priority.MEDIUM) return 2;
  return 1;
}

function taskSortScore(task: Task, now: Date) {
  const deadlineWeight = task.deadline
    ? Math.max(1, 10 - Math.ceil((task.deadline.getTime() - now.getTime()) / DAY_MS))
    : 1;
  return deadlineWeight * 10 + priorityWeight(task.priorityLabel) * 6 + (task.estimatedMinutes || 30) / 60;
}

function toPreferences(value: unknown): Preferences {
  return typeof value === 'object' && value !== null ? value as Preferences : {};
}

export async function generateStudyPlan(prisma: PrismaClient, userId: string, days = 7) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  const preferences = toPreferences(user?.preferences);
  const startMinutes = minutesFromClock(preferences.freeTimeStart || '19:00');
  const endMinutes = minutesFromClock(preferences.freeTimeEnd || '22:00');
  const dailyCapacity = Math.max(30, Math.min(
    (preferences.studyHoursDaily || Math.max(1, (endMinutes - startMinutes) / 60)) * 60,
    Math.max(30, endMinutes - startMinutes),
  ));

  const now = new Date();
  const tasks = await prisma.task.findMany({
    where: {
      userId,
      status: { in: [TaskStatus.PENDING, TaskStatus.IN_PROGRESS] },
    },
    orderBy: [{ deadline: 'asc' }, { priorityScore: 'desc' }],
  });

  const existingBlocks = await prisma.scheduleBlock.findMany({
    where: {
      userId,
      startTime: { gte: now },
      endTime: { lte: new Date(now.getTime() + days * DAY_MS) },
    },
    orderBy: { startTime: 'asc' },
  });

  const planned: StudyPlanBlock[] = [];
  const sortedTasks = [...tasks].sort((a, b) => taskSortScore(b, now) - taskSortScore(a, now));

  for (let dayIndex = 0; dayIndex < days; dayIndex += 1) {
    const day = new Date(now.getTime() + dayIndex * DAY_MS);
    day.setHours(0, 0, 0, 0);
    let cursor = startMinutes;
    const dayEnd = Math.min(endMinutes, startMinutes + dailyCapacity);

    const fixed = existingBlocks
      .filter((block) => block.startTime >= dateAtMinutes(day, startMinutes) && block.startTime < dateAtMinutes(day, endMinutes))
      .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

    for (const task of sortedTasks) {
      if (planned.some((block) => block.taskId === task.id)) continue;
      if (task.deadline && task.deadline < day) continue;

      let remaining = Math.max(30, task.estimatedMinutes || 45);
      while (remaining > 0 && cursor < dayEnd) {
        const blocked = fixed.find((block) => {
          const blockStart = block.startTime.getHours() * 60 + block.startTime.getMinutes();
          const blockEnd = block.endTime.getHours() * 60 + block.endTime.getMinutes();
          return cursor >= blockStart && cursor < blockEnd;
        });
        if (blocked) {
          cursor = blocked.endTime.getHours() * 60 + blocked.endTime.getMinutes();
          continue;
        }

        const blockMinutes = Math.min(remaining, MAX_BLOCK_MINUTES, dayEnd - cursor);
        if (blockMinutes < 25) break;

        const startTime = dateAtMinutes(day, cursor);
        const endTime = dateAtMinutes(day, cursor + blockMinutes);
        planned.push({ taskId: task.id, title: task.title, startTime, endTime, blockType: BlockType.TASK });
        remaining -= blockMinutes;
        cursor += blockMinutes;

        if (remaining > 0 && cursor + BREAK_MINUTES < dayEnd) {
          planned.push({
            title: 'Break',
            startTime: dateAtMinutes(day, cursor),
            endTime: dateAtMinutes(day, cursor + BREAK_MINUTES),
            blockType: BlockType.BREAK,
          });
          cursor += BREAK_MINUTES;
        }
      }
    }
  }

  return planned;
}

export async function persistStudyPlan(prisma: PrismaClient, userId: string, blocks: StudyPlanBlock[]) {
  await prisma.scheduleBlock.deleteMany({
    where: {
      userId,
      calendarEventId: null,
      startTime: { gte: new Date() },
      title: { in: blocks.map((block) => block.title) },
    },
  });

  if (blocks.length === 0) return [];

  await prisma.scheduleBlock.createMany({
    data: blocks.map((block) => ({
      userId,
      taskId: block.taskId,
      title: block.title,
      startTime: block.startTime,
      endTime: block.endTime,
      blockType: block.blockType,
    })),
  });

  return prisma.scheduleBlock.findMany({
    where: { userId, startTime: { gte: new Date() } },
    orderBy: { startTime: 'asc' },
    take: 50,
  });
}
