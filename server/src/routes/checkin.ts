import { Router } from 'express';
import { PrismaClient } from '../lib/prisma';
import { requireAuth } from '@clerk/express';
import { AIService } from '../services/ai.service';
import { getOrCreateCurrentUser } from '../lib/currentUser';

const router = Router();
const prisma = new PrismaClient();

// Submit evening check-in
router.post('/', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    const { reflection, obstacles, tomorrowPlan } = req.body;

    // Count today's tasks
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const totalTasks = await prisma.task.count({
      where: { userId: user.id, deadline: { gte: today, lt: tomorrow } }
    });
    const completedTasks = await prisma.task.count({
      where: { userId: user.id, status: 'COMPLETED', deadline: { gte: today, lt: tomorrow } }
    });

    // Get AI coach response
    const coachResponse = await AIService.generateCoachResponse(
      completedTasks,
      totalTasks,
      reflection || ''
    );

    const completed = await prisma.task.findMany({
      where: { userId: user.id, status: 'COMPLETED', completedAt: { gte: today, lt: tomorrow } },
      select: { id: true },
    });

    const completionPct = totalTasks === 0 ? 100 : Math.round((completedTasks / totalTasks) * 100);

    const checkIn = await prisma.checkin.create({
      data: {
        userId: user.id,
        date: today,
        completedTaskIds: completed.map((task: { id: string }) => task.id),
        userMessage: [reflection, obstacles, tomorrowPlan].filter(Boolean).join('\n\n'),
        completionPct,
        coachMessage: coachResponse,
        revisedPlan: tomorrowPlan ? { tomorrowPlan } : undefined,
        motivationScore: completionPct >= 80 ? 8 : completionPct >= 40 ? 6 : 4,
      }
    });

    await prisma.productivityLog.upsert({
      where: { userId_date: { userId: user.id, date: today } },
      update: {
        tasksCompleted: completedTasks,
        tasksPlanned: totalTasks,
        completionRate: completionPct,
      },
      create: {
        userId: user.id,
        date: today,
        tasksCompleted: completedTasks,
        tasksPlanned: totalTasks,
        completionRate: completionPct,
      },
    });

    res.status(201).json({
      checkIn,
      coachResponse
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get recent check-ins
router.get('/', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    const checkIns = await prisma.checkin.findMany({
      where: { userId: user.id },
      orderBy: { date: 'desc' },
      take: 7
    });
    
    res.json(checkIns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
