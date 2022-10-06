import client from '../config/database';

export async function getCredentials(email: string) {
  const user = await client.users.findUnique({
    where: {
      email,
    },
  });
  return user;
}
