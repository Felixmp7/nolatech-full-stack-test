import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// Middlewares
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);


// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB conectado 🍀'))
    .catch(err => console.log('Error conectando a MongoDB: ❌', err));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto 🚀 ${PORT}`);
});
