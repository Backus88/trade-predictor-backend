import { Users, UserInfo } from '@prisma/client';

export type insertUser = Omit<Users, 'id'>;
export type insertUserInfo = Omit<UserInfo, 'id'>;
