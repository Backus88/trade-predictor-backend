import { Response, Request } from 'express';
import * as registerService from '../services/registerServices';
import { InsertUserType, InsertUserInfoType } from '../types/authTypes';

export default async function register(req: Request, res: Response) {
  const { body } = req;
  const cryptedPass = await registerService.cryptUser(body.password);
  const dataUser: InsertUserType = {
    email: body.email,
    password: cryptedPass,
  };
  await registerService.checkEmail(body.email);
  const returnedDataUser = await registerService.createUser(dataUser);
  await registerService.checkIfCreated(returnedDataUser.email, body.email);
  const dataInfo: InsertUserInfoType = {
    cep: body.cep,
    street: body.street,
    houseNumber: body.houseNumber,
    complement: body.complement,
    cpf: body.cpf,
    userId: returnedDataUser.id,
  };
  await registerService.checkCpf(body.cpf);
  const returnedDataInfo = await registerService.createUserInfo(dataInfo);
  await registerService.checkIfCreated(returnedDataInfo.cpf, body.cpf);
  res.sendStatus(201);
}
