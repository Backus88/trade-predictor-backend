import { Router } from 'express';
import { insertPrediction } from '../controllers/predictionController';
import tokenValidation from '../middlewares/tokenValidation';

const predictionRouter = Router();

predictionRouter.post('/prediction', tokenValidation, insertPrediction);

export default predictionRouter;
