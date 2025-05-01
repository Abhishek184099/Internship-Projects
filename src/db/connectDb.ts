import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

export const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    logger.info('MongoDB connected successfully');
  } catch (error) {
    logger.error(`MongoDB connection error: ${(error as mongoose.Error).message}`);
  }
};

