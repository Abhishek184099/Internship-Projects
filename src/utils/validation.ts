import { z } from 'zod';

export const userCreateSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50)
});

export const userUpdateSchema = userCreateSchema.partial();

