import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { authenticate } from "./middlewares/auth.middleware.ts";
import authRoutes from "./routes/auth.routes.ts";
import employeeRoutes from "./routes/employees.routes.ts";
import evaluationRoutes from "./routes/evaluation.routes.ts";
import feedbackRoutes from "./routes/feedback.routes.ts";
import reportRoutes from "./routes/reports.routes.ts";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use(authenticate as any);
app.use('/api/employees', employeeRoutes);
app.use('/api/evaluations', evaluationRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/reports', reportRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
