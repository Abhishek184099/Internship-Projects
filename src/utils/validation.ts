import { z } from 'zod';
import { userType } from '../contracts/user.interface.js';
import { responseType } from '../contracts/response.interface.js';

export const userCreateSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50)
});

export const userUpdateSchema = userCreateSchema.partial();


export const isExistUser = async(user : userType , message : string) : Promise<responseType<userType>> => {
  if (!user) {
    return {
        statusCode: 404,
        message: 'User not found',
    };
}
return {
    statusCode: 200,
    message: message,
    data: user
};
}
