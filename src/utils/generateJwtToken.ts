import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { notFoundError } from './errorMessages';

dotenv.config();

export default function generateJwtToken(userId: number) {
    const key = process.env.SECRET_KEY;
    const data = {
        userId,
    };
    if (!key) {
        throw notFoundError('key');
    }
    return jwt.sign(data, key, { expiresIn: process.env.EXPIRATION_TIME });
}
