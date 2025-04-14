import cors from 'cors';
import express from 'express';

import { connectToDB } from './database/index.js';
import { errorHandler } from './middlewares/errors.middleware.js';
import routes from './routes/index.routes.js';

export const app = express();
const PORT = process.env.PORT || 5000;

connectToDB();

// Middlewares
app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running in port 🚀 ${PORT}`);
});

// DDD Domain, Driven, Design