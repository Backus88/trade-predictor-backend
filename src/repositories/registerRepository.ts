import client from '../config/database';
import { InsertUserType, InsertUserInfoType } from '../types/authTypes';

export async function insertUser(user: InsertUserType) {
  return client.users.create({ select: { email: true, id: true }, data: user });
}

export async function insertUserInfo(userInfo: InsertUserInfoType) {
  return client.userInfo.create({ select: { cpf: true }, data: userInfo });
}

export async function getUserByEmail(email: string) {
  const user = await client.users.findUnique({
    where: {
      email,
    },
  });
  return user;
}

export async function getUserInfoByCpf(cpf: string) {
  return client.userInfo.findUnique({
    where: {
      cpf,
    },
  });
}
