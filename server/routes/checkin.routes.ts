import { Router } from 'express';
import { requireAuth } from '../middleware/auth.middleware';

const router = Router();

router.use(requireAuth);

router.post('/', (req, res) => res.json({ message: 'Not implemented' }));
router.get('/', (req, res) => res.json({ message: 'Not implemented' }));

export default router;
