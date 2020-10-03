import Router from 'express';
import controllers from './user.controller.js';

const userRouter = Router();

userRouter.route('/')
    .get(controllers.getMany)
userRouter.route('/:id')
    .get(controllers.getOne)
export default userRouter;