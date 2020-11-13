module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": process.env.POSTGRESQL_USERNAME,
  "password": process.env.POSTGRESQL_PASSWORD,
  "database": process.env.POSTGRESQL_DATABASE,
  "entities": [
    "./src/models/*.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
