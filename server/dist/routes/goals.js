"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const express_2 = require("@clerk/express");
const ai_service_1 = require("../services/ai.service");
const currentUser_1 = require("../lib/currentUser");
const router = (0, express_1.Router)();
const prisma = new prisma_1.PrismaClient();
function toApiGoal(goal) {
    const tasks = goal.tasks || [];
    const completed = tasks.filter((task) => task.status === 'COMPLETED').length;
    return {
        ...goal,
        deadline: goal.targetDate,
        progress: goal.completionPct,
        status: goal.status?.toLowerCase(),
        tasksCount: tasks.length,
        tasksCompleted: completed,
    };
}
// Get all goals
router.get('/', (0, express_2.requireAuth)(), async (req, res) => {
    try {
        const user = await (0, currentUser_1.getOrCreateCurrentUser)(prisma, req);
        if (!user)
            return res.status(401).json({ error: 'Unauthorized' });
        const goals = await prisma.goal.findMany({
            where: { userId: user.id },
            include: { tasks: true, milestones: { orderBy: { order: 'asc' } } },
            orderBy: { targetDate: 'asc' },
        });
        res.json(goals.map(toApiGoal));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Create a goal and auto-decompose into tasks
router.post('/', (0, express_2.requireAuth)(), async (req, res) => {
    try {
        const user = await (0, currentUser_1.getOrCreateCurrentUser)(prisma, req);
        if (!user)
            return res.status(401).json({ error: 'Unauthorized' });
        const { title, description, days = 7, category = 'OTHER' } = req.body;
        if (!title)
            return res.status(400).json({ error: 'Title is required' });
        // Calculate deadline based on days
        const deadline = new Date();
        deadline.setDate(deadline.getDate() + days);
        // Create the Goal
        const goal = await prisma.goal.create({
            data: {
                userId: user.id,
                title,
                description,
                category,
                targetDate: deadline,
                status: 'ACTIVE',
                completionPct: 0,
            }
        });
        // Decompose into tasks using AI
        const tasksPlan = await ai_service_1.AIService.decomposeGoal(title, description || '', days);
        if (tasksPlan && Array.isArray(tasksPlan) && tasksPlan.length > 0) {
            const tasksToCreate = tasksPlan.map((t) => {
                const taskDate = new Date();
                taskDate.setDate(taskDate.getDate() + (t.dayOffset || 0));
                taskDate.setHours(23, 59, 59, 999);
                return {
                    userId: user.id,
                    goalId: goal.id,
                    title: t.title,
                    description: t.description,
                    deadline: taskDate,
                    scheduledFor: taskDate,
                    priorityLabel: prisma_1.Priority.HIGH,
                    priorityScore: 80,
                    status: prisma_1.TaskStatus.PENDING,
                    riskLevel: prisma_1.RiskLevel.NONE,
                    estimatedMinutes: t.timeEstimate || 30,
                };
            });
            await prisma.task.createMany({ data: tasksToCreate });
            await prisma.milestone.createMany({
                data: tasksPlan.slice(0, 5).map((task, index) => {
                    const targetDate = new Date();
                    targetDate.setDate(targetDate.getDate() + (task.dayOffset || index));
                    return {
                        goalId: goal.id,
                        title: task.title,
                        targetDate,
                        order: index,
                    };
                }),
            });
        }
        const goalWithTasks = await prisma.goal.findUnique({
            where: { id: goal.id },
            include: { tasks: true, milestones: { orderBy: { order: 'asc' } } }
        });
        res.status(201).json(toApiGoal(goalWithTasks));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.get('/:id', (0, express_2.requireAuth)(), async (req, res) => {
    try {
        const user = await (0, currentUser_1.getOrCreateCurrentUser)(prisma, req);
        if (!user)
            return res.status(401).json({ error: 'Unauthorized' });
        const goal = await prisma.goal.findFirst({
            where: { id: req.params.id, userId: user.id },
            include: { tasks: true, milestones: { orderBy: { order: 'asc' } } },
        });
        if (!goal)
            return res.status(404).json({ error: 'Goal not found' });
        res.json(toApiGoal(goal));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.default = router;
