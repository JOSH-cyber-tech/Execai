import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { clerkMiddleware } from '@clerk/express';
import { errorMiddleware } from './middleware/error.middleware';
import taskRoutes from './routes/tasks.routes';
import goalRoutes from './routes/goals.routes';
import checkinRoutes from './routes/checkin.routes';
import { initScheduledJobs } from './jobs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.set("trust proxy", 1); // Trust first proxy for rate limiting
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(clerkMiddleware());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/checkin', checkinRoutes);

// Error middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  initScheduledJobs();
});
