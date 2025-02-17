import { Router } from 'express';
import { createEvaluation, getEvaluationById } from '../controllers/evaluation.controller.js';

const router = Router();

router.post('/create', createEvaluation);
router.get('/:id', getEvaluationById);

export default router;