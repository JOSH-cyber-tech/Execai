import { PrismaClient } from './prisma';
import type { Request } from 'express';

export function getClerkUserId(req: Request) {
  const auth = (req as any).auth;
  return auth?.userId || auth?.()?.userId;
}

export async function getOrCreateCurrentUser(prisma: PrismaClient, req: Request) {
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
