import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { clerkMiddleware } from '@clerk/express';

import tasksRouter from './routes/tasks';
import goalsRouter from './routes/goals';
import checkinRouter from './routes/checkin';
import scheduleRouter from './routes/schedule';
import habitsRouter from './routes/habits';
import analyticsRouter from './routes/analytics';
import notificationsRouter from './routes/notifications';
import calendarRouter from './routes/calendar';
import assistantRouter from './routes/assistant';

import { runRiskDetectionJob } from './jobs/riskDetection.job';
import { runEveningCheckInJob } from './jobs/eveningCheckin.job';

const app = express();
const PORT = process.env.PORT || 3001;

// --- Middleware ---
app.use(cors({
  origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 300 }));
app.use(express.json());

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    config: {
      database: Boolean(process.env.DATABASE_URL),
      clerkSecret: Boolean(process.env.CLERK_SECRET_KEY),
      clerkPublishable: Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY),
      gemini: Boolean(process.env.GEMINI_API_KEY),
    },
  });
});

app.use(clerkMiddleware({
  publishableKey: process.env.CLERK_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  secretKey: process.env.CLERK_SECRET_KEY,
}));

// --- API Routes ---
app.use('/api/tasks', tasksRouter);
app.use('/api/goals', goalsRouter);
app.use('/api/checkin', checkinRouter);
app.use('/api/schedule', scheduleRouter);
app.use('/api/habits', habitsRouter);
app.use('/api/analytics', analyticsRouter);
app.use('/api/notifications', notificationsRouter);
app.use('/api/calendar', calendarRouter);
app.use('/api/assistant', assistantRouter);

// --- Background Jobs (simple cron-like scheduling using setInterval) ---
function scheduleJob(job: () => Promise<void>, cronHour: number) {
  const now = new Date();
  let nextRun = new Date();
  nextRun.setHours(cronHour, 0, 0, 0);

  // If time has already passed today, schedule for tomorrow
  if (nextRun <= now) {
    nextRun.setDate(nextRun.getDate() + 1);
  }

  const delay = nextRun.getTime() - now.getTime();
  setTimeout(() => {
    job();
    // Then run every 24 hours
    setInterval(job, 24 * 60 * 60 * 1000);
  }, delay);
}

// Schedule jobs
scheduleJob(runRiskDetectionJob, 8);    // Run at 8 AM daily
scheduleJob(runEveningCheckInJob, 19);  // Run at 7 PM daily

// Run risk detection immediately on startup in development
if (process.env.NODE_ENV !== 'production') {
  setTimeout(() => {
    console.log('[Dev] Running risk detection job on startup...');
    runRiskDetectionJob();
  }, 2000);
}

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 ExecAI Backend running on http://localhost:${PORT}`);
});

export default app;
