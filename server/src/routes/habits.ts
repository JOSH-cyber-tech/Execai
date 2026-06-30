import { Router } from 'express';
import { PrismaClient } from '../lib/prisma';
import { requireAuth } from '@clerk/express';
import { getOrCreateCurrentUser } from '../lib/currentUser';

const router = Router();
const prisma = new PrismaClient();

router.get('/', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    const habits = await prisma.habit.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
    });

    res.json(habits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    const { name, description, icon = 'Target', color = '#4f46e5' } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    const habit = await prisma.habit.create({
      data: { userId: user.id, name, description, icon, color },
    });

    res.status(201).json(habit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/:id/complete', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    const habit = await prisma.habit.findFirst({ where: { id: req.params.id, userId: user.id } });
    if (!habit) return res.status(404).json({ error: 'Habit not found' });

    const day = new Date().toISOString().slice(0, 10);
    const completionLog = { ...((habit.completionLog as Record<string, boolean>) || {}), [day]: true };
    const currentStreak = habit.currentStreak + (completionLog[day] ? 1 : 0);

    const updated = await prisma.habit.update({
      where: { id: habit.id },
      data: {
        completionLog,
        currentStreak,
        longestStreak: Math.max(habit.longestStreak, currentStreak),
        totalCompletions: habit.totalCompletions + 1,
      },
    });

    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
