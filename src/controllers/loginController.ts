import { Response, Request } from 'express';
import * as loginService from '../services/loginServices';

export default async function login(req: Request, res: Response) {
  const { body } = req;
  const data = await loginService.checkEmail(body.email);
  await loginService.checkPassword(body.password, data.password);
  const token = await loginService.generateToken(data.id);
  res.status(200).send(token);
}
