import { Router } from 'express';
import { requireAuth } from '@clerk/express';

const router = Router();

router.get('/status', requireAuth(), (_req, res) => {
  res.json({
    connected: Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET),
    message: process.env.GOOGLE_CLIENT_ID ? 'Google Calendar credentials are configured.' : 'Google Calendar credentials are not configured yet.',
  });
});

export default router;
