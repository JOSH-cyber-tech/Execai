import { getAuth, clerkClient } from '@clerk/express';
import { PrismaClient } from '../lib/prisma';
import { Request, Response, NextFunction } from 'express';

const prisma = new PrismaClient();

// Extending Express Request to include user
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const { userId } = getAuth(req);
  
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  try {
    // Get or create user in our DB
    let user = await prisma.user.findUnique({ where: { clerkId: userId } });
    
    if (!user) {
      const clerkUser = await clerkClient.users.getUser(userId);
      user = await prisma.user.create({
        data: {
          clerkId: userId,
          email: clerkUser.emailAddresses[0].emailAddress,
          name: `${clerkUser.firstName} ${clerkUser.lastName}`,
          avatarUrl: clerkUser.imageUrl,
        }
      });
    }
    
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}
