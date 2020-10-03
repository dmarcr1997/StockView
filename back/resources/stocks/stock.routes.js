import Router from 'express';
import controllers from './stock.controller.js';

const stockRouter = Router();

stockRouter.route('/')
    .get(controllers.getMany)
//     .post(controllers.createOne)
stockRouter.route('/:id')
    .get(controllers.getOne)
export default stockRouter;