import { getMongoRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import authConfig from '../config/auth';
import Admin from '../schemas/Admin';

interface Response {
  admin: Admin;
  token: string;
}

interface Request {
  email: string;
  password: string;
}

class AuthenticateAdminService {
  public async execute({ email, password }: Request): Promise<Response> {
    const adminsRepository = getMongoRepository(Admin);

    const admin = await adminsRepository.findOne({ where: { email } });

    if (!admin) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passwordMatched = await compare(password, admin.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(admin.id),
      expiresIn,
    });

    return {
      admin,
      token,
    };
  }
}

export default AuthenticateAdminService;
