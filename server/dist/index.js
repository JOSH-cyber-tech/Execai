"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const express_2 = require("@clerk/express");
const tasks_1 = __importDefault(require("./routes/tasks"));
const goals_1 = __importDefault(require("./routes/goals"));
const checkin_1 = __importDefault(require("./routes/checkin"));
const schedule_1 = __importDefault(require("./routes/schedule"));
const habits_1 = __importDefault(require("./routes/habits"));
const analytics_1 = __importDefault(require("./routes/analytics"));
const notifications_1 = __importDefault(require("./routes/notifications"));
const calendar_1 = __importDefault(require("./routes/calendar"));
const riskDetection_job_1 = require("./jobs/riskDetection.job");
const eveningCheckin_job_1 = require("./jobs/eveningCheckin.job");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// --- Middleware ---
app.use((0, cors_1.default)({
    origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    credentials: true
}));
app.use((0, helmet_1.default)());
app.use((0, express_rate_limit_1.default)({ windowMs: 15 * 60 * 1000, limit: 300 }));
app.use(express_1.default.json());
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
app.use((0, express_2.clerkMiddleware)({
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    secretKey: process.env.CLERK_SECRET_KEY,
}));
// --- API Routes ---
app.use('/api/tasks', tasks_1.default);
app.use('/api/goals', goals_1.default);
app.use('/api/checkin', checkin_1.default);
app.use('/api/schedule', schedule_1.default);
app.use('/api/habits', habits_1.default);
app.use('/api/analytics', analytics_1.default);
app.use('/api/notifications', notifications_1.default);
app.use('/api/calendar', calendar_1.default);
// --- Background Jobs (simple cron-like scheduling using setInterval) ---
function scheduleJob(job, cronHour) {
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
scheduleJob(riskDetection_job_1.runRiskDetectionJob, 8); // Run at 8 AM daily
scheduleJob(eveningCheckin_job_1.runEveningCheckInJob, 19); // Run at 7 PM daily
// Run risk detection immediately on startup in development
if (process.env.NODE_ENV !== 'production') {
    setTimeout(() => {
        console.log('[Dev] Running risk detection job on startup...');
        (0, riskDetection_job_1.runRiskDetectionJob)();
    }, 2000);
}
// --- Start Server ---
app.listen(PORT, () => {
    console.log(`🚀 ExecAI Backend running on http://localhost:${PORT}`);
});
exports.default = app;
