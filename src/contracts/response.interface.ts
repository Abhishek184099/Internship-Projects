export interface responseType<T> {
    statusCode: number;
    message: string;
    data?: T;
    error?: string;
  }