import { Router } from "express";
import { UserController } from "../controller/user.controller.js";
import { UserService } from "../service/user.service.js";

const router = Router();

const userService = new UserService();
const userController = new UserController(userService);

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;


