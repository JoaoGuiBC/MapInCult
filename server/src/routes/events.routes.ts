import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateEventService from '../services/CreateEventService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import Events from '../models/Event';

const eventsRouter = Router();

eventsRouter.get('/', async (request, response) => {
  const eventRepository = getRepository(Events);
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

export default eventsRouter;
