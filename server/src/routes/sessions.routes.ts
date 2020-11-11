import { Router } from 'express';

import AuthenticateAdminService from '../services/AuthenticateAdminService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateAdmin = new AuthenticateAdminService();

  const { admin, token } = await authenticateAdmin.execute({
    email,
    password,
  });

  delete admin.password;

  return response.json({ admin, token });
});

export default sessionsRouter;
