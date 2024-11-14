import { Router } from 'express';
import { additionalServiceController } from '../controllers/additionalService.controller.js';

const additionalServiceRouter = Router();

additionalServiceRouter.get('/', additionalServiceController.getAll);
additionalServiceRouter.post('/', additionalServiceController.create);
additionalServiceRouter.delete('/:id', additionalServiceController.remove);
additionalServiceRouter.patch('/:id', additionalServiceController.update);

export default additionalServiceRouter;
