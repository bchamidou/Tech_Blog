const { User } = require('../models');

const userData = [
  {
    username: 'user1',
    password: 'password'
    
  },
  {
    username: 'user2',
    password: 'password'
  },
  {
    username: 'ip',
    password: 'password'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;