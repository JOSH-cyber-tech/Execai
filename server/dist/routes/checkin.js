"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const express_2 = require("@clerk/express");
const ai_service_1 = require("../services/ai.service");
const currentUser_1 = require("../lib/currentUser");
const router = (0, express_1.Router)();
const prisma = new prisma_1.PrismaClient();
// Submit evening check-in
router.post('/', (0, express_2.requireAuth)(), async (req, res) => {
    try {
        const user = await (0, currentUser_1.getOrCreateCurrentUser)(prisma, req);
        if (!user)
            return res.status(401).json({ error: 'Unauthorized' });
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
        const coachResponse = await ai_service_1.AIService.generateCoachResponse(completedTasks, totalTasks, reflection || '');
        const completed = await prisma.task.findMany({
            where: { userId: user.id, status: 'COMPLETED', completedAt: { gte: today, lt: tomorrow } },
            select: { id: true },
        });
        const completionPct = totalTasks === 0 ? 100 : Math.round((completedTasks / totalTasks) * 100);
        const checkIn = await prisma.checkin.create({
            data: {
                userId: user.id,
                date: today,
                completedTaskIds: completed.map((task) => task.id),
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Get recent check-ins
router.get('/', (0, express_2.requireAuth)(), async (req, res) => {
    try {
        const user = await (0, currentUser_1.getOrCreateCurrentUser)(prisma, req);
        if (!user)
            return res.status(401).json({ error: 'Unauthorized' });
        const checkIns = await prisma.checkin.findMany({
            where: { userId: user.id },
            orderBy: { date: 'desc' },
            take: 7
        });
        res.json(checkIns);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.default = router;
