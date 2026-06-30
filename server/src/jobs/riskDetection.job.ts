import { PrismaClient, RiskLevel } from '../lib/prisma';
import { calculatePriority, calculateRisk } from '../services/productivity.service';

const prisma = new PrismaClient();

/**
 * Scans all pending tasks and updates their risk level based on deadline proximity.
 * Sends a notification if a task is at critical risk.
 * Run daily at 8 AM.
 */
export async function runRiskDetectionJob() {
  console.log('[Risk Detection Job] Starting...');
  
  try {
    const now = new Date();
    const activeTasks = await prisma.task.findMany({
      where: {
        status: { in: ['PENDING', 'IN_PROGRESS'] },
        deadline: { not: null }
      },
      include: { user: true }
    });
    const allTasks = await prisma.task.findMany({ orderBy: { updatedAt: 'desc' }, take: 500 });

    for (const task of activeTasks) {
      if (!task.deadline) continue;
      const history = allTasks.filter((item) => item.userId === task.userId);
      const risk = calculateRisk(task as any, history as any, now);
      const priority = calculatePriority(task as any, history as any, now);
      const newRiskLevel: RiskLevel = risk.level;

      if (task.riskLevel !== newRiskLevel) {
        await prisma.task.update({
          where: { id: task.id },
          data: {
            riskLevel: newRiskLevel,
            riskReason: `${priority.reason} ${risk.reason}`,
            priorityLabel: priority.label,
            priorityScore: priority.score,
          }
        });

        // Create a notification for critical tasks
        if (newRiskLevel === RiskLevel.CRITICAL) {
          const hoursLeft = Math.round((task.deadline.getTime() - now.getTime()) / 3600000);
          await prisma.notification.create({
            data: {
              userId: task.userId,
              title: 'Deadline Risk Detected',
              message: `"${task.title}" is due in ~${hoursLeft} hours. Likelihood of missing deadline: ${risk.likelihood}%. Recommended daily work: ${risk.recommendedDailyHours}h.`,
              type: 'deadline_risk',
              isRead: false
            }
          });
          console.log(`[Risk Detection] Flagged task "${task.title}" as CRITICAL.`);
        }
      }
    }

    console.log(`[Risk Detection Job] Processed ${activeTasks.length} active deadline tasks.`);
  } catch (error) {
    console.error('[Risk Detection Job] Error:', error);
  }
}
