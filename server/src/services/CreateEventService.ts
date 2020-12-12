import { getMongoRepository } from 'typeorm';

import Event from '../schemas/Event';

interface Request {
  name: string;
  description: string;
  year: number;
  latitude: number;
  longitude: number;
  link: string;
}

class CreateEventService {
  public async execute({
    name,
    description,
    year,
    latitude,
    longitude,
    link,
  }: Request): Promise<Event> {
    const eventRepository = getMongoRepository(Event);

    const event = eventRepository.create({
      name,
      description,
      year,
      latitude,
      longitude,
      link,
    });

    await eventRepository.save(event);

    return event;
  }
}

export default CreateEventService;
