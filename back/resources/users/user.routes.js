import Router from 'express';
import controllers from './user.controller.js';

const userRouter = Router();

userRouter.route('/')
    .get(controllers.getMany)

export default userRouter;