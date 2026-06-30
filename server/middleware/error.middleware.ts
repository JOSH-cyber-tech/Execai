import { Request, Response, NextFunction } from 'express';

export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  
  if (err.name === 'ZodError') {
    return res.status(400).json({ error: 'Validation failed', details: err.errors });
  }
  
  if (err.code === 'P2025') { // Prisma not found
    return res.status(404).json({ error: 'Resource not found' });
  }
  
  res.status(500).json({ error: 'Internal server error' });
}
