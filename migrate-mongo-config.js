require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const tmp = MONGODB_URI.split('/')
const MONGODB_DATABASENAME = tmp[tmp.length - 1];
// In this file you can configure migrate-mongo

module.exports = {
  mongodb: {
    // TODO Change (or review) the url to your MongoDB:
    url: MONGODB_URI,

    // TODO Change this to your database name:
    databaseName: MONGODB_DATABASENAME,

    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    }
  },

  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  migrationsDir: "migrations",

  // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  changelogCollectionName: "changelog"
};