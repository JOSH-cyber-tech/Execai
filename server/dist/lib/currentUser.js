"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClerkUserId = getClerkUserId;
exports.getOrCreateCurrentUser = getOrCreateCurrentUser;
function getClerkUserId(req) {
    const auth = req.auth;
    return auth?.userId || auth?.()?.userId;
}
async function getOrCreateCurrentUser(prisma, req) {
    const clerkId = getClerkUserId(req);
    if (!clerkId) {
        return null;
    }
    return prisma.user.upsert({
        where: { clerkId },
        update: {},
        create: {
            clerkId,
            email: `${clerkId}@execai.local`,
            name: 'ExecAI User',
        },
    });
}
