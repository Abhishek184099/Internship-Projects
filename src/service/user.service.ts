import { responseType } from "../contracts/response.interface.js";
import User from "../models/User.js";
import { userType } from "../contracts/user.interface.js";
import { logger } from "../utils/logger.js";
import { isExistUser } from "../utils/validation.js";

export class UserService {
    async createUser(userData: userType) : Promise<responseType<userType>> {
      try{
        const user = await User.create(userData);
        logger.info(`User created: ${user._id}`);
        return {
          statusCode: 201,
          message: 'User created successfully',
          data: user
        };
  
      }catch (error) {
        logger.error(`Error creating user: ${error}`);
        throw error;
      }
    }
    
    async getUsers () : Promise<responseType<userType[]>> {
        try {
            const users = await User.find();
            return {
                statusCode: 200,
                message: 'Users fetched successfully',
                data: users
            }
        } catch (error) {
            logger.error(`Error fetching users: ${error}`);
            throw error;              
        }
    }

       async getUserById (id: string) : Promise<responseType<userType>> {
        try {
            const user = await User.findById(id);
            return isExistUser(user as userType , 'User fetched successfully');
        }
        catch (error) {
            logger.error(`Error fetching user by ID: ${error}`);
            throw error;
        }
    }

    async updateUser (id: string, userData: Partial<userType>) : Promise<responseType<userType>> {
        try {
            const user = await User.findByIdAndUpdate(id, userData, { new: true });
         return  isExistUser(user as userType , 'User updated successfully');
        } catch (error) { 
            logger.error(`Error updating user: ${error}`);
            throw error;
        }  
    } 

    async deleteUser (id: string) : Promise<responseType<userType>> {
        try {
            const user = await User.findByIdAndDelete(id);
           return isExistUser(user as userType , 'User deleted successfully');
        } catch (error) {
            logger.error(`Error deleting user: ${error}`);
            throw error;
        }
    }
}