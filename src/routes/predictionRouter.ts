import { Router } from 'express';
import { insertPrediction, predict } from '../controllers/predictionController';
import tokenValidation from '../middlewares/tokenValidation';

const predictionRouter = Router();

predictionRouter.post('/prediction', tokenValidation, insertPrediction);
predictionRouter.put('/prediction/predict/:id', tokenValidation, predict);
predictionRouter.get('/prediction/robot/:robotId');
predictionRouter.get('/prediction/user/:userId');

export default predictionRouter;
