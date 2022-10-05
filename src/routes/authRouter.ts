import { Router } from 'express';
import { register } from '../controllers/registerController';

const authRouter = Router();

authRouter.post('/register', register);

export default authRouter;
