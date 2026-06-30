import { Router } from 'express';
import { PrismaClient, TaskStatus } from '../lib/prisma';
import { requireAuth } from '@clerk/express';
import { AIService } from '../services/ai.service';
import { getOrCreateCurrentUser } from '../lib/currentUser';
import { calculatePriority, calculateRisk } from '../services/productivity.service';

const router = Router();
const prisma = new PrismaClient();

function mapPriority(priority?: string) {
  const normalized = priority?.toUpperCase();
  return normalized === 'HIGH' || normalized === 'CRITICAL' || normalized === 'LOW'
    ? normalized
    : 'MEDIUM';
}

function mapTaskStatus(status?: string) {
  const normalized = status?.toUpperCase();
  return Object.values(TaskStatus).includes(normalized as TaskStatus)
    ? normalized as TaskStatus
    : undefined;
}

function toApiTask(task: any, extra: Record<string, unknown> = {}) {
  return {
    ...task,
    priority: task.priorityLabel?.toLowerCase(),
    riskLevel: task.riskLevel?.toLowerCase(),
    status: task.status?.toLowerCase(),
    timeEstimate: task.estimatedMinutes,
    priorityReason: task.priorityReason || task.riskReason || undefined,
    ...extra,
  };
}

async function userTaskHistory(userId: string) {
  return prisma.task.findMany({
    where: { userId },
    orderBy: { updatedAt: 'desc' },
    take: 75,
  });
}

// Get all tasks for the authenticated user
router.get('/', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const tasks = await prisma.task.findMany({
      where: { userId: user.id },
      include: { subtasks: true, goal: true },
      orderBy: [
        { status: 'asc' },
        { priorityScore: 'desc' },
        { deadline: 'asc' },
      ],
    });
    
    res.json(tasks.map((task) => {
      const priority = calculatePriority(task as any, tasks as any);
      const risk = calculateRisk(task as any, tasks as any);
      return toApiTask(task, {
        priorityReason: priority.reason,
        riskDetails: risk,
      });
    }));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// QuickAdd a task using natural language
router.post('/quickadd', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { input } = req.body;
    if (!input) {
      return res.status(400).json({ error: 'Input is required' });
    }

    // Use AI to parse the input
    const parsedData = await AIService.parseTask(input);
    
    const deadline = parsedData.deadline ? new Date(parsedData.deadline) : null;
    const priorityLabel = mapPriority(parsedData.priority);
    const history = await userTaskHistory(user.id);
    const draft = {
      title: parsedData.title || input,
      description: parsedData.description || input,
      estimatedMinutes: parsedData.estimatedMinutes || parsedData.timeEstimate || 30,
      priorityLabel,
      deadline,
      completedAt: null,
      status: TaskStatus.PENDING,
    };
    const priority = calculatePriority(draft as any, history as any);
    const risk = calculateRisk(draft as any, history as any);

    const task = await prisma.task.create({
      data: {
        userId: user.id,
        title: draft.title,
        description: parsedData.description || input,
        aiExtracted: true,
        estimatedMinutes: draft.estimatedMinutes,
        priorityLabel: priority.label,
        priorityScore: priority.score,
        deadline,
        scheduledFor: deadline,
        status: 'PENDING',
        riskLevel: risk.level,
        riskReason: `${priority.reason} ${risk.reason}`,
        isRecurring: Boolean(parsedData.recurrence),
        recurrenceRule: parsedData.recurrence || null,
      }
    });

    res.status(201).json({
      ...toApiTask(task),
      deadlinePreview: parsedData.deadlinePreview,
      priorityReason: priority.reason,
      riskDetails: risk,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.patch('/:id', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    const { status, title, deadline, estimatedMinutes } = req.body;
    const mappedStatus = mapTaskStatus(status);
    const existing = await prisma.task.findFirst({ where: { id: req.params.id, userId: user.id } });
    if (!existing) return res.status(404).json({ error: 'Task not found' });

    const history = await userTaskHistory(user.id);
    const draft = {
      ...existing,
      title: title || existing.title,
      deadline: deadline ? new Date(deadline) : existing.deadline,
      estimatedMinutes: estimatedMinutes ? Number(estimatedMinutes) : existing.estimatedMinutes,
      status: mappedStatus || existing.status,
      completedAt: mappedStatus === 'COMPLETED' ? new Date() : existing.completedAt,
    };
    const priority = calculatePriority(draft as any, history as any);
    const risk = calculateRisk(draft as any, history as any);

    const task = await prisma.task.update({
      where: { id: req.params.id, userId: user.id },
      data: {
        ...(title ? { title } : {}),
        ...(deadline ? { deadline: new Date(deadline) } : {}),
        ...(estimatedMinutes ? { estimatedMinutes: Number(estimatedMinutes) } : {}),
        priorityLabel: priority.label,
        priorityScore: priority.score,
        riskLevel: risk.level,
        riskReason: `${priority.reason} ${risk.reason}`,
        ...(mappedStatus ? {
          status: mappedStatus,
          completedAt: mappedStatus === 'COMPLETED' ? new Date() : null,
        } : {}),
      },
    });
    
    if (mappedStatus === 'COMPLETED') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const tasksPlanned = await prisma.task.count({
        where: { userId: user.id, deadline: { gte: today, lt: tomorrow } }
      });

      const completedTasksQuery = await prisma.task.findMany({
        where: { userId: user.id, status: 'COMPLETED', completedAt: { gte: today, lt: tomorrow } },
        select: { estimatedMinutes: true }
      });

      const tasksCompleted = completedTasksQuery.length;
      const completionRate = tasksPlanned > 0 ? Math.round((tasksCompleted / tasksPlanned) * 100) : 0;
      
      let focusMinutes = 0;
      for (const t of completedTasksQuery) {
        focusMinutes += t.estimatedMinutes || 30;
      }

      await prisma.productivityLog.upsert({
        where: { userId_date: { userId: user.id, date: today } },
        update: { tasksCompleted, tasksPlanned, focusMinutes, completionRate },
        create: {
          userId: user.id,
          date: today,
          tasksCompleted,
          tasksPlanned,
          focusMinutes,
          completionRate,
        },
      });
    }

    res.json(toApiTask(task));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
