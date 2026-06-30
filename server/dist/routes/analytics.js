"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const express_2 = require("@clerk/express");
const currentUser_1 = require("../lib/currentUser");
const router = (0, express_1.Router)();
const prisma = new prisma_1.PrismaClient();
router.get('/', (0, express_2.requireAuth)(), async (req, res) => {
    try {
        const user = await (0, currentUser_1.getOrCreateCurrentUser)(prisma, req);
        if (!user)
            return res.status(401).json({ error: 'Unauthorized' });
        const start = new Date();
        start.setDate(start.getDate() - 13);
        start.setHours(0, 0, 0, 0);
        const [logs, totalTasks, completedTasks, habits, insights] = await Promise.all([
            prisma.productivityLog.findMany({
                where: { userId: user.id, date: { gte: start } },
                orderBy: { date: 'asc' },
            }),
            prisma.task.count({ where: { userId: user.id } }),
            prisma.task.count({ where: { userId: user.id, status: 'COMPLETED' } }),
            prisma.habit.findMany({ where: { userId: user.id }, orderBy: { currentStreak: 'desc' } }),
            prisma.aiInsight.findMany({ where: { userId: user.id }, orderBy: { generatedAt: 'desc' }, take: 5 }),
        ]);
        res.json({
            logs,
            totalTasks,
            completedTasks,
            completionRate: totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100),
            habits,
            insights,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.default = router;
