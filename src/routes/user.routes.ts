import { UserController } from './../resources/user/user.controllers';
import { Router } from "express";

const userRouter = Router();
const userController = new UserController();

userRouter.post('/signin',userController.signin)

userRouter.post('/signup', userController.signup)


export default userRouter;