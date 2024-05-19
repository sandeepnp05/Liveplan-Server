import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes.js';

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(cookieParser()); 
// Enable CORS and set allowed origin
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
// Routes
app.use('/', authRouter);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
