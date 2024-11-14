import { Router } from 'express';
import { discountController } from '../controllers/discount.controller.js';
import { catchError } from '../utils/catchError.js';

const discountRouter = Router();

discountRouter.get('/', catchError(discountController.getAll));
discountRouter.post('/', catchError(discountController.create));
discountRouter.delete('/:id', catchError(discountController.remove));
discountRouter.patch('/:id', catchError(discountController.update));

export default discountRouter;
