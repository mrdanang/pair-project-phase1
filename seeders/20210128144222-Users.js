'use strict';

const users = [
  {
    username : "admin",
    password : "admin123",
    email : "admin@gmail.com",
    phone_number : "082211331985",
    createdAt : new Date(),
    updatedAt : new Date()

  }
  ]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users)
  },

  down: async (queryInterface, Sequelize) => {
    return bulkDelete('Users', null, {})
  }
};
