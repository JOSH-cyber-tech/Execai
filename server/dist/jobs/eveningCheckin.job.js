"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEveningCheckInJob = runEveningCheckInJob;
const prisma_1 = require("../lib/prisma");
const prisma = new prisma_1.PrismaClient();
/**
 * Sends a reminder to users to complete their evening check-in.
 * Run daily at 7 PM.
 */
async function runEveningCheckInJob() {
    console.log('[Evening Check-In Job] Starting...');
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        // Find users who haven't done a check-in today
        const usersWithCheckIn = await prisma.checkin.findMany({
            where: { date: { gte: today, lt: tomorrow } },
            select: { userId: true }
        });
        const userIdsWithCheckIn = usersWithCheckIn.map((c) => c.userId);
        // Get all users
        const allUsers = await prisma.user.findMany({
            where: {
                id: { notIn: userIdsWithCheckIn }
            },
            select: { id: true }
        });
        // Create notifications for users who haven't checked in
        const notifications = allUsers.map((user) => ({
            userId: user.id,
            title: '🌙 Evening Check-In Reminder',
            message: 'How was your day? Take 2 minutes to reflect and plan tomorrow.',
            type: 'checkin_reminder',
            isRead: false
        }));
        if (notifications.length > 0) {
            await prisma.notification.createMany({ data: notifications });
        }
        console.log(`[Evening Check-In Job] Sent ${notifications.length} reminder notifications.`);
    }
    catch (error) {
        console.error('[Evening Check-In Job] Error:', error);
    }
}
