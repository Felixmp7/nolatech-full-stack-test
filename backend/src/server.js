import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { connectToMongo } from './database/mongoose.js';
import authRoutes from './routes/auth.routes.js';
import employeeRoutes from './routes/employees.routes.js';
import evaluationTemplateRoutes from './routes/evaluationTemplate.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// Middlewares
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/evaluationTemplates', evaluationTemplateRoutes);

connectToMongo();

app.listen(PORT, () => {
    console.log(`Server running in port 🚀 ${PORT}`);
});
