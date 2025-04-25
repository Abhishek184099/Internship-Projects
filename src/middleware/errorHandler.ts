import { Request, Response, NextFunction } from "express";
import { responseType } from "../contracts/response.interface.js";
import { logger } from "../utils/logger.js";
import { ZodError } from "zod";

export const errorHandler = (
  err: ZodError | Error,
  req: Request,
  res: Response<responseType<void>>,
  next: NextFunction
): void => {
  logger.error(`${err.message}`);

  if (err instanceof ZodError) {
    res.status(400).json({
      statusCode: 400,
      message: 'Validation error',
      error: err.errors.map(e => e.message).join(', ')
    });
    return;
  }

  res.status(500).json({
    statusCode: 500,
    message: 'Internal server error',
    error: err.message
  });
};