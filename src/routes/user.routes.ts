import { Router } from "express";
import { UserController } from "../controller/user.controller.js";

const router = Router();
const userController = new UserController();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;


