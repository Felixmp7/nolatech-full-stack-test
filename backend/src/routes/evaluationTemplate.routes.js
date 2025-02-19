import { Router } from 'express';
import {
    createEvaluation,
    getEvaluationById,
    updateEvaluationById
} from '../controllers/evaluationTemplate.controller.js';
import { validateInputs } from '../middlewares/validate.middleware.js';
import {
    validateCreateEvaluation,
    validateGetEvaluationById,
    validateUpdateEvaluationById
} from '../validations/evaluationTemplate.validation.js';

const router = Router();

router.post('/create', validateCreateEvaluation(), validateInputs, createEvaluation);
router.get('/:id', validateGetEvaluationById(), validateInputs, getEvaluationById);
router.put('/:id', validateUpdateEvaluationById(), validateInputs, updateEvaluationById);

export default router;