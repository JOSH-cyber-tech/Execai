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

    const start = req.query.start ? new Date(String(req.query.start)) : new Date();
    start.setHours(0, 0, 0, 0);
    const end = req.query.end ? new Date(String(req.query.end)) : new Date(start);
    if (!req.query.end) end.setDate(start.getDate() + 7);

    const blocks = await prisma.scheduleBlock.findMany({
      where: { userId: user.id, startTime: { gte: start }, endTime: { lte: end } },
      include: { task: true },
      orderBy: { startTime: 'asc' },
    });

    res.json(blocks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    const { title, startTime, endTime, taskId, blockType = 'TASK' } = req.body;
    if (!title || !startTime || !endTime) {
      return res.status(400).json({ error: 'Title, startTime, and endTime are required' });
    }

    const block = await prisma.scheduleBlock.create({
      data: {
        userId: user.id,
        taskId,
        title,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        blockType,
      },
    });

    res.status(201).json(block);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
