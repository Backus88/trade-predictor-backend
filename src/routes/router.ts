import { Router } from 'express';
import authRouter from './authRouter';
import robotRouter from './robotRouter';
import predictionRouter from './predictionRouter';

const router = Router();
router.use(authRouter);
router.use(predictionRouter);
router.use(robotRouter);

export default router;
