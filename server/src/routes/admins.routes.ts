import { Router } from 'express';

import CreateAdminService from '../services/CreateAdminService';

const adminsRouter = Router();

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
