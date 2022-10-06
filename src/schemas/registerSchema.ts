import joi from 'joi';
import { RegisterBody } from '../types/authTypes';

const registerSchema = joi.object<RegisterBody>({
  email: joi.string().email().required(),
  password: joi.string().min(4).max(128).required(),
  cep: joi
    .string()
    .regex(/^([0-9]{8})$/)
    .required(),
  street: joi.string().min(4).max(200).required(),
  houseNumber: joi
    .string()
    .regex(/^([0-9]{0,4})$/)
    .required(),
  complement: joi.string().min(4).max(200).required(),
  cpf: joi
    .string()
    .regex(/^([0-9]{11})$/)
    .required(),
});

export default registerSchema;
