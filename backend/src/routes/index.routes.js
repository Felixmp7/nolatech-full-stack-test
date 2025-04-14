import { app } from '../server';

import { authenticate } from './middlewares/auth.middleware.js';
import authRoutes from './routes/auth.routes.js';
import employeeRoutes from './routes/employees.routes.js';
import evaluationRoutes from './routes/evaluation.routes.js';
import evaluationTemplateRoutes from './routes/evaluationTemplate.routes.js';

app.use('/auth', authRoutes);
app.use(authenticate);
app.use('/employees', employeeRoutes);
app.use('/evaluationTemplates', evaluationTemplateRoutes);
app.use('/evaluations', evaluationRoutes);