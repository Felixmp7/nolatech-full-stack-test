import { Router } from 'express';

import { authenticate } from '../middlewares/auth.middleware.js';
import authRoutes from './auth.routes.js';
import employeeRoutes from './employees.routes.js';
import evaluationRoutes from './evaluation.routes.js';
import evaluationTemplateRoutes from './evaluationTemplate.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use(authenticate);
router.use('/employees', employeeRoutes);
router.use('/evaluationTemplates', evaluationTemplateRoutes);
router.use('/evaluations', evaluationRoutes);

export default router;