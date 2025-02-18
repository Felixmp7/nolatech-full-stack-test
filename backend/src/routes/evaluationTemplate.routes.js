import { Router } from 'express';
import {
    createEvaluation,
    getEvaluationById,
    updateEvaluationById
} from '../controllers/evaluationTemplate.controller.js';

const router = Router();

router.post('/create', createEvaluation);
router.get('/:id', getEvaluationById);
router.put('/:id', updateEvaluationById);

export default router;