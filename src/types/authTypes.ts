import { Users, UserInfo } from '@prisma/client';

export type InsertUserType = Omit<Users, 'id'>;
export type InsertUserInfoType = Omit<UserInfo, 'id'>;
type Aux = InsertUserType & InsertUserInfoType;
export type RegisterBody = Omit<Aux, 'userId'>;
