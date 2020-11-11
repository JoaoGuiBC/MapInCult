import { createConnection } from 'typeorm';

async function connect() {
  await createConnection();
}

connect();
