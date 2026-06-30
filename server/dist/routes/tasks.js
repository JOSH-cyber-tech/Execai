"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const express_2 = require("@clerk/express");
const ai_service_1 = require("../services/ai.service");
const currentUser_1 = require("../lib/currentUser");
const router = (0, express_1.Router)();
const prisma = new prisma_1.PrismaClient();
function mapPriority(priority) {
    const normalized = priority?.toUpperCase();
    return normalized === 'HIGH' || normalized === 'CRITICAL' || normalized === 'LOW'
        ? normalized
        : 'MEDIUM';
}
function mapTaskStatus(status) {
    const normalized = status?.toUpperCase();
    return Object.values(prisma_1.TaskStatus).includes(normalized)
        ? normalized
        : undefined;
}
function toApiTask(task) {
    return {
        ...task,
        priority: task.priorityLabel?.toLowerCase(),
        riskLevel: task.riskLevel?.toLowerCase(),
        status: task.status?.toLowerCase(),
        timeEstimate: task.estimatedMinutes,
    };
}
// Get all tasks for the authenticated user
router.get('/', (0, express_2.requireAuth)(), async (req, res) => {
    try {
        const user = await (0, currentUser_1.getOrCreateCurrentUser)(prisma, req);
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const tasks = await prisma.task.findMany({
            where: { userId: user.id },
            include: { subtasks: true, goal: true },
            orderBy: [
                { status: 'asc' },
                { priorityScore: 'desc' },
                { deadline: 'asc' },
            ],
        });
        res.json(tasks.map(toApiTask));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// QuickAdd a task using natural language
router.post('/quickadd', (0, express_2.requireAuth)(), async (req, res) => {
    try {
        const user = await (0, currentUser_1.getOrCreateCurrentUser)(prisma, req);
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const { input } = req.body;
        if (!input) {
            return res.status(400).json({ error: 'Input is required' });
        }
        // Use AI to parse the input
        const parsedData = await ai_service_1.AIService.parseTask(input);
        const deadline = new Date();
        deadline.setHours(23, 59, 59, 999);
        const priorityLabel = mapPriority(parsedData.priority);
        const task = await prisma.task.create({
            data: {
                userId: user.id,
                title: parsedData.title || input,
                aiExtracted: true,
                estimatedMinutes: parsedData.estimatedMinutes || parsedData.timeEstimate || 30,
                priorityLabel,
                priorityScore: priorityLabel === 'HIGH' ? 80 : priorityLabel === 'LOW' ? 30 : 50,
                deadline: deadline,
                scheduledFor: deadline,
                status: 'PENDING',
                riskLevel: 'NONE',
            }
        });
        res.status(201).json(toApiTask(task));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.patch('/:id', (0, express_2.requireAuth)(), async (req, res) => {
    try {
        const user = await (0, currentUser_1.getOrCreateCurrentUser)(prisma, req);
        if (!user)
            return res.status(401).json({ error: 'Unauthorized' });
        const { status, title, deadline } = req.body;
        const mappedStatus = mapTaskStatus(status);
        const task = await prisma.task.update({
            where: { id: req.params.id, userId: user.id },
            data: {
                ...(title ? { title } : {}),
                ...(deadline ? { deadline: new Date(deadline) } : {}),
                ...(mappedStatus ? {
                    status: mappedStatus,
                    completedAt: mappedStatus === 'COMPLETED' ? new Date() : null,
                } : {}),
            },
        });
        res.json(toApiTask(task));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.default = router;
