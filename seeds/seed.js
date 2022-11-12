const sequelize = require('../config/connection');
const seedUser = require('./user-seeds');
const seedGenre = require('./genre-seeds');
const seedAlbums = require('./album-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedGenre();

  await seedAlbums();

  process.exit(0);
};

seedAll();
