import { Router } from 'express';
import { getRepository } from 'typeorm';

import Admin from '../models/Admin';

import CreateAdminService from '../services/CreateAdminService';

const adminsRouter = Router();

adminsRouter.get('/', async (request, response) => {
  const adminsRepository = getRepository(Admin);

  const admins = await adminsRepository.find();

  return response.json(admins);
});

adminsRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createAdmin = new CreateAdminService();

  const admin = await createAdmin.execute({
    name,
    email,
    password,
  });

  delete admin.password;

  return response.json(admin);
});

export default adminsRouter;
