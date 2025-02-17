import { Router } from 'express';
import {
    createEvaluation,
    getEvaluationById,
    updateEvaluationById,
    getEvaluationByEmployeeId
} from '../controllers/evaluation.controller.js';

const router = Router();

router.post('/create', createEvaluation);
router.get('/:id', getEvaluationById);
router.put('/:id', updateEvaluationById);
router.get('/employee/:id', getEvaluationByEmployeeId);

export default router;