const { User } = require('../models');

const userData = [
    {
      "name": "Jennifer",
      "email": "jennifer@gmail.com",
      "password": "password12345"
    },
    {
      "name": "Forrest",
      "email": "forrest@gmail.com",
      "password": "password12345"
    },
    {
      "name": "Mellisa",
      "email": "mellisa@gmail.com",
      "password": "password12345"
    },
    {
      "name": "Steven",
      "email": "steven@gmail.com",
      "password": "password12345"
    }
  ]

  const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;