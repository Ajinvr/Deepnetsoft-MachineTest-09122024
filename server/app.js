import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './db/config/mongodbconfig.js';
import menuroutes from "./routes/menuRoutes.js"

dotenv.config();
connectDB()

const app = express();

app.use(cors('*'));
app.use(bodyParser.json());

// routes
app.get('/', (req, res) => {
    res.json({ message: 'server is up' });
});

app.use('/menu',menuroutes)



export default app;
