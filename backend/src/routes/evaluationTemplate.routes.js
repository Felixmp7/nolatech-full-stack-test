import { Router } from 'express';
import {
    createEvaluationTemplate,
    getAllEvaluationTemplates,
    getEvaluationTemplateById,
    updateEvaluationTemplateById
} from '../controllers/evaluationTemplate.controller.js';
import { validateInputs } from '../middlewares/validate.middleware.js';
import {
    validateCreateEvaluationTemplate,
    validateGetEvaluationTemplateById,
    validateUpdateEvaluationTemplateById
} from '../validations/evaluationTemplate.validation.js';

const router = Router();

router.post('/create', validateCreateEvaluationTemplate(), validateInputs, createEvaluationTemplate);
router.get('/:id', validateGetEvaluationTemplateById(), validateInputs, getEvaluationTemplateById);
router.put('/:id', validateUpdateEvaluationTemplateById(), validateInputs, updateEvaluationTemplateById);
router.get('/', getAllEvaluationTemplates);

export default router;