import { Router } from 'express';
import joiValidation from '../middlewares/joiValidation';
import register from '../controllers/registerController';
import registerSchema from '../schemas/registerSchema';
import login from '../controllers/loginController';
import loginSchema from '../schemas/loginSchema';

const authRouter = Router();

authRouter.post('/register', joiValidation(registerSchema), register);
authRouter.post('/login', joiValidation(loginSchema), login);

export default authRouter;
