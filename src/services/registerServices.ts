import {
  getUserByEmail,
  insertUser,
  getUserInfoByCpf,
  insertUserInfo,
} from '../repositories/registerRepository';
import { notPossibleOperation } from '../utils/errorMessages';
import { InsertUserType, InsertUserInfoType } from '../types/authTypes';

export async function checkEmail(email: string) {
  const data = await getUserByEmail(email);
  if (data) {
    throw notPossibleOperation('email already exists!!');
  }
}

export async function createUser(user: InsertUserType) {
  return insertUser(user);
}

export async function checkIfCreated(data: string, returnedData: any) {
  if (data !== returnedData) {
    throw notPossibleOperation('user or userInfo not created!!');
  }
}

export async function createUserInfo(userInfo: InsertUserInfoType) {
  return insertUserInfo(userInfo);
}

export async function checkCpf(cpf: string) {
  const data = await getUserInfoByCpf(cpf);
  if (data) {
    throw notPossibleOperation('cpf already exists!!');
  }
}
