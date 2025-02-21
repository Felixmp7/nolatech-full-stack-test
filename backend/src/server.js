import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { connectToMongo } from './database/mongoose.js';
import { authenticate } from './middlewares/auth.middleware.js';
import { errorHandler } from './middlewares/errors.middleware.js';
import authRoutes from './routes/auth.routes.js';
import employeeRoutes from './routes/employees.routes.js';
import evaluationRoutes from './routes/evaluation.routes.js';
import evaluationTemplateRoutes from './routes/evaluationTemplate.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// Middlewares
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use(authenticate);
app.use('/api/employees', employeeRoutes);
app.use('/api/evaluationTemplates', evaluationTemplateRoutes);
app.use('/api/evaluations', evaluationRoutes);

app.use(errorHandler);

connectToMongo();

app.listen(PORT, () => {
    console.log(`Server running in port 🚀 ${PORT}`);
});
