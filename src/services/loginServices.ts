import { getCredentials } from '../repositories/loginRepository';
import { notAuthorized, notFoundError } from '../utils/errorMessages';
import generateJwtToken from '../utils/generateJwtToken';
import { comparePassword } from '../utils/cryptAndCompare';

export async function checkEmail(email: string) {
  const data = await getCredentials(email);
  if (!data) {
    throw notFoundError('email doesnt exists!!');
  }
  return data;
}

export async function checkPassword(password: string, hash: string) {
  const authorized = await comparePassword(password, hash);
  if (!authorized) {
    throw notAuthorized('password or email!!');
  }
}

export async function generateToken(id: number) {
  return generateJwtToken(id);
}
