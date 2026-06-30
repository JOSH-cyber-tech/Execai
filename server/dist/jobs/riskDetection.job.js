"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runRiskDetectionJob = runRiskDetectionJob;
const prisma_1 = require("../lib/prisma");
const prisma = new prisma_1.PrismaClient();
/**
 * Scans all pending tasks and updates their risk level based on deadline proximity.
 * Sends a notification if a task is at critical risk.
 * Run daily at 8 AM.
 */
async function runRiskDetectionJob() {
    console.log('[Risk Detection Job] Starting...');
    try {
        const now = new Date();
        const oneDayFromNow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        const threeDaysFromNow = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
        // Find all pending tasks with deadlines in the next 3 days
        const atRiskTasks = await prisma.task.findMany({
            where: {
                status: 'PENDING',
                deadline: { lte: threeDaysFromNow, gte: now }
            },
            include: { user: true }
        });
        for (const task of atRiskTasks) {
            if (!task.deadline)
                continue;
            let newRiskLevel = prisma_1.RiskLevel.LOW;
            if (task.deadline < oneDayFromNow) {
                newRiskLevel = prisma_1.RiskLevel.CRITICAL;
            }
            else if (task.deadline < new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000)) {
                newRiskLevel = prisma_1.RiskLevel.HIGH;
            }
            else {
                newRiskLevel = prisma_1.RiskLevel.MEDIUM;
            }
            if (task.riskLevel !== newRiskLevel) {
                await prisma.task.update({
                    where: { id: task.id },
                    data: { riskLevel: newRiskLevel }
                });
                // Create a notification for critical tasks
                if (newRiskLevel === prisma_1.RiskLevel.CRITICAL) {
                    const hoursLeft = Math.round((task.deadline.getTime() - now.getTime()) / 3600000);
                    await prisma.notification.create({
                        data: {
                            userId: task.userId,
                            title: '⚠️ Deadline Risk Detected',
                            message: `"${task.title}" is due in ~${hoursLeft} hours and is still pending.`,
                            type: 'deadline_risk',
                            isRead: false
                        }
                    });
                    console.log(`[Risk Detection] Flagged task "${task.title}" as CRITICAL.`);
                }
            }
        }
        console.log(`[Risk Detection Job] Processed ${atRiskTasks.length} at-risk tasks.`);
    }
    catch (error) {
        console.error('[Risk Detection Job] Error:', error);
    }
}
