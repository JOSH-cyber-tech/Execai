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

    const notifications = await prisma.notification.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
      take: 25,
    });

    res.json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/subscribe', requireAuth(), async (req, res) => {
  try {
    const user = await getOrCreateCurrentUser(prisma, req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    await prisma.user.update({
      where: { id: user.id },
      data: { pushSubscription: req.body },
    });

    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
