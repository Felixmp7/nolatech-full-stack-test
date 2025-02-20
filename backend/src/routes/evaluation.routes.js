import { Router } from 'express';
import {
    createEvaluation,
    deleteEvaluationById,
    getEvaluationById,
    getEvaluationsByEmployeeId,
    updateEvaluationById
} from '../controllers/evaluation.controller.js';
import { validateInputs } from '../middlewares/validate.middleware.js';
import {
    validateCreateEvaluation,
    validateGetEvaluationById,
    validateUpdateEvaluationById
} from '../validations/evaluation.validation.js';

const router = Router();

router.post('/create', validateCreateEvaluation(), validateInputs, createEvaluation);
router.get('/:id', validateGetEvaluationById(), validateInputs, getEvaluationById);
router.put('/:id', validateUpdateEvaluationById(), validateInputs, updateEvaluationById);
router.delete('/:id', deleteEvaluationById);
router.get('/employee/:id', getEvaluationsByEmployeeId);

export default router;