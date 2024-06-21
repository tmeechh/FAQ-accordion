import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const app = express();

// Middleware
app.use(express.json());

// Routes
import exampleRoutes from './routes/exampleRoutes';
app.use('/api/example', exampleRoutes);

export default app;
