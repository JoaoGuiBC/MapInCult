import { Router } from 'express';
import { getMongoRepository } from 'typeorm';

import CreateEventService from '../services/CreateEventService';
import DeleteEventService from '../services/DeleteEventService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import Events from '../schemas/Event';

const eventsRouter = Router();

eventsRouter.get('/', async (_, response) => {
  const eventRepository = getMongoRepository(Events);
  const events = await eventRepository.find();

  return response.json(events);
});

eventsRouter.post('/', ensureAuthenticated, async (request, response) => {
  const { name, description, year, latitude, longitude, link } = request.body;

  const CreateEvent = new CreateEventService();

  const event = await CreateEvent.execute({
    name,
    description,
    year,
    latitude,
    longitude,
    link,
  });

  return response.json(event);
});

eventsRouter.delete('/', ensureAuthenticated, async (request, response) => {
  const { id } = request.body;

  const DeleteEvent = new DeleteEventService();

  await DeleteEvent.execute(id);

  return response.json({ message: 'Event deleted' });
});

export default eventsRouter;
