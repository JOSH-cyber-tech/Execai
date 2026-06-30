import { clerkMiddleware, requireAuth } from '@clerk/express';
import { Request, Response, NextFunction } from 'express';

// Middleware to initialize clerk
export const clerkAuth = clerkMiddleware();

// Middleware to enforce authentication
export const requireAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // We use requireAuth from @clerk/express to protect routes
  requireAuth()(req, res, next);
};
