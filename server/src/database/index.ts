import { createConnection } from 'typeorm';

async function teste() {
  await createConnection();
}

teste();
