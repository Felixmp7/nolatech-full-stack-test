import { Router } from 'express';
import { createEvaluation } from '../controllers/evaluation.controller.js';

const router = Router();

router.post('/create', createEvaluation);

export default router;