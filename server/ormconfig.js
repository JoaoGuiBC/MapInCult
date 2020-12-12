module.exports = {
  "type": "mongodb",
  "host": "localhost",
  "port": 27017,
  "useUnifiedTopology": true,
  "database": process.env.MONGODB_DATABASE,
  "entities": [
    "./src/schemas/*.ts"
  ]
}
