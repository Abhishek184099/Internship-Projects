import express, { Application } from 'express';
import dotenv from 'dotenv';
import { connectDb } from './db/connectDb.js';
import { errorHandler } from './middleware/errorHandler.js';
import userRoutes from "./routes/user.routes.js"

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.use(errorHandler);


const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDb();
});