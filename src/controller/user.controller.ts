import { Request, Response, NextFunction } from 'express';
import { UserService } from '../service/user.service.js';
import { responseType } from '../contracts/response.interface.js';
import { userCreateSchema, userUpdateSchema } from '../utils/validation.js';

export class UserController {
    private userService: UserService

    constructor() {
        this.userService = new UserService()
    }

    createUser = async (req: Request, res: Response<responseType<any>>, next: NextFunction) => {
        try {
          const validatedData = userCreateSchema.parse(req.body);
          const response = await this.userService.createUser(validatedData);
          res.status(response.statusCode).json(response);
        } catch (error) {
          next(error);
        }
    };
    
      getUsers = async (req: Request, res: Response<responseType<any>>, next: NextFunction) => {
        try {
          const response = await this.userService.getUsers();
          res.status(response.statusCode).json(response);
        } catch (error) {
          next(error);
        }
      };
    
      getUser = async (req: Request, res: Response<responseType<any>>, next: NextFunction) => {
        try {
          const { id } = req.params;
          const response = await this.userService.getUserById(id);
          res.status(response.statusCode).json(response);
        } catch (error) {
          next(error);
        }
      };
    
      updateUser = async (req: Request, res: Response<responseType<any>>, next: NextFunction) => {
        try {
          const { id } = req.params;
          const validatedData = userUpdateSchema.parse(req.body);
          const response = await this.userService.updateUser(id, validatedData);
          res.status(response.statusCode).json(response);
        } catch (error) {
          next(error);
        }
      };
    
      deleteUser = async (req: Request, res: Response<responseType<any>>, next: NextFunction) => {
        try {
          const { id } = req.params;
          const response = await this.userService.deleteUser(id);
          res.status(response.statusCode).json(response);
        } catch (error) {
          next(error);
        }
      };
    
}    