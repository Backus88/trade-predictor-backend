import client from '../config/database';
import { insertUser, insertUserInfo } from '../types/authTypes';

export async function createUser(user: insertUser) {
  await client.users.create({ data: user });
}

export async function createUserInfo(userInfo: insertUserInfo) {
  await client.userInfo.create({ data: userInfo });
}

export async function getUserByEmail(email: string) {
  const user = await client.users.findUnique({
    where: {
      email,
    },
  });
  return user;
}

export async function getUserInfoById(id: number) {
  return client.userInfo.findUnique({
    where: {
      id,
    },
  });
}
