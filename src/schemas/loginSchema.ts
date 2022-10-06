import joi from 'joi';
import { InsertUserType } from '../types/authTypes';

const loginSchema = joi.object<InsertUserType>({
  email: joi.string().email().required(),
  password: joi.string().min(4).max(128).required(),
});

export default loginSchema;
