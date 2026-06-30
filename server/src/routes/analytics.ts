import { Router } from 'express';
import { PrismaClient } from '../lib/prisma';
import { requireAuth } from '@clerk/express';
import { getOrCreateCurrentUser } from '../lib/currentUser';
import { buildCoachSummary, calculatePriority, calculateRisk } from '../services/productivity.service';

const router = Router();
const prisma = new PrismaClient();

router.get('/', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    const start = new Date();
    start.setDate(start.getDate() - 13);
    start.setHours(0, 0, 0, 0);

    let logs = await prisma.productivityLog.findMany({
      where: { userId: user.id, date: { gte: start } },
      orderBy: { date: 'asc' },
    });

    // Backfill missing logs for the last 14 days
    if (logs.length < 7) {
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      
      for (let i = 0; i <= 13; i++) {
        const checkDate = new Date(start);
        checkDate.setDate(checkDate.getDate() + i);
        
        // Skip if log already exists
        if (logs.some((log: any) => log.date.getTime() === checkDate.getTime())) {
          continue;
        }

        const nextDay = new Date(checkDate);
        nextDay.setDate(nextDay.getDate() + 1);

        const tasksPlanned = await prisma.task.count({
          where: { userId: user.id, deadline: { gte: checkDate, lt: nextDay } }
        });

        const completedTasksQuery = await prisma.task.findMany({
          where: { userId: user.id, status: 'COMPLETED', completedAt: { gte: checkDate, lt: nextDay } },
          select: { estimatedMinutes: true }
        });

        const tasksCompleted = completedTasksQuery.length;
        const completionRate = tasksPlanned > 0 ? Math.round((tasksCompleted / tasksPlanned) * 100) : 0;
        
        let focusMinutes = 0;
        for (const t of completedTasksQuery) {
          focusMinutes += t.estimatedMinutes || 30; // default to 30 mins if null
        }

        await prisma.productivityLog.upsert({
          where: { userId_date: { userId: user.id, date: checkDate } },
          update: { tasksCompleted, tasksPlanned, focusMinutes, completionRate },
          create: {
            userId: user.id,
            date: checkDate,
            tasksCompleted,
            tasksPlanned,
            focusMinutes,
            completionRate,
          },
        });
      }

      // Re-fetch logs after backfilling
      logs = await prisma.productivityLog.findMany({
        where: { userId: user.id, date: { gte: start } },
        orderBy: { date: 'asc' },
      });
    }

    const [tasks, habits, insights] = await Promise.all([
      prisma.task.findMany({ where: { userId: user.id }, orderBy: [{ priorityScore: 'desc' }, { deadline: 'asc' }] }),
      prisma.habit.findMany({ where: { userId: user.id }, orderBy: { currentStreak: 'desc' } }),
      prisma.aiInsight.findMany({ where: { userId: user.id }, orderBy: { generatedAt: 'desc' }, take: 5 }),
    ]);
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.status === 'COMPLETED').length;
    const pending = tasks.filter((task) => task.status !== 'COMPLETED');
    const enriched = pending.map((task) => ({
      ...task,
      priorityReason: calculatePriority(task as any, tasks as any).reason,
      riskDetails: calculateRisk(task as any, tasks as any),
    }));
    const coach = buildCoachSummary(logs, tasks as any);

    res.json({
      logs,
      totalTasks,
      completedTasks,
      completionRate: totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100),
      habits,
      insights,
      coach,
      priorityTasks: enriched.slice(0, 5),
      deadlineRisks: enriched.filter((task) => ['HIGH', 'CRITICAL', 'MEDIUM'].includes(task.riskDetails.level)).slice(0, 5),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
