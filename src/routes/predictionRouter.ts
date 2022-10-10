import { Router } from 'express';
import {
  insertPrediction,
  predict,
  closedPredictions,
  openedPredictions,
} from '../controllers/predictionController';
import tokenValidation from '../middlewares/tokenValidation';

const predictionRouter = Router();

predictionRouter.post('/prediction', tokenValidation, insertPrediction);
predictionRouter.put('/prediction/predict/:id', tokenValidation, predict);
predictionRouter.get('/prediction/opened', tokenValidation, openedPredictions);
predictionRouter.get('/prediction/closed', tokenValidation, closedPredictions);

export default predictionRouter;
