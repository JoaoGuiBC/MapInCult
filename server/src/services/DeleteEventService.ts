import { getMongoRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Event from '../schemas/Event';

class DeleteEventService {
  public async execute(id: string): Promise<void> {
    const eventRepository = getMongoRepository(Event);

    const checkIfEventExists = await eventRepository.findOne(id);

    if (!checkIfEventExists) {
      throw new AppError('Event does not exist', 404);
    }

    await eventRepository.delete(id);

    return;
  }
}

export default DeleteEventService;
