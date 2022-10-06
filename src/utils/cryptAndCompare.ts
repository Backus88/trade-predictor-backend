import bcrypt from 'bcrypt';

export async function cryptInfo(password: string) {
  const saltRounds = 10;
  const hash: string = bcrypt.hashSync(password, saltRounds);
  return hash;
}

export async function comparePassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}
