import { Router } from 'express';
import { clientController } from '../controllers/client.controller.js';
import { catchError } from '../utils/catchError.js';

const clientRouter = Router();

clientRouter.get('/', catchError(clientController.getAll));
clientRouter.post('/', catchError(clientController.add));
clientRouter.delete('/:id', catchError(clientController.remove));
clientRouter.patch('/:id', catchError(clientController.update));
clientRouter.patch(
  '/privilege/:id',
  catchError(clientController.updatePrivilege),
);

export default clientRouter;
