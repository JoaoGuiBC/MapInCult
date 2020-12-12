import { getMongoRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';
import Admin from '../schemas/Admin';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateAdminService {
  public async execute({ name, email, password }: Request): Promise<Admin> {
    const adminsRepository = getMongoRepository(Admin);

    const checkAdminExists = await adminsRepository.findOne({
      where: { email },
    });

    if (checkAdminExists) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(password, 8);

    const admin = adminsRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await adminsRepository.save(admin);

    return admin;
  }
}

export default CreateAdminService;
