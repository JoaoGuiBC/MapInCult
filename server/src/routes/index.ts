import { Router } from 'express';

import eventsRouter from './events.routes';
import sessionsRouter from './sessions.routes';
import adminsRouter from './admins.routes';

const routes = Router();

routes.use('/events', eventsRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/admins', adminsRouter);

export default routes;
