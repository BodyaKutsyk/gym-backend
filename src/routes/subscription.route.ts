import { Router } from 'express';
import { subscriptionController } from '../controllers/subscription.controller.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', subscriptionController.getAll);
subscriptionRouter.post('/', subscriptionController.create);
subscriptionRouter.delete('/:id', subscriptionController.remove);
subscriptionRouter.patch('/:id', subscriptionController.update);

export default subscriptionRouter;
