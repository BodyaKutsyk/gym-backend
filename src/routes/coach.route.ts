import { Router } from 'express';
import { coachController } from '../controllers/coach.controller.js';
import { catchError } from '../utils/catchError.js';

const coachRouter = Router();

coachRouter.get('/', catchError(coachController.getAll));
coachRouter.post('/', catchError(coachController.create));
coachRouter.delete('/:id', catchError(coachController.remove));
coachRouter.patch('/:id', catchError(coachController.update));

export default coachRouter;
