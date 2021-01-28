'use strict';


const bookusers = [
  {
    UserId : 1,
    BookId : 1,
    start_borrow_time : new Date(),
    end_date : new Date(),
    createdAt : new Date(),
    updatedAt : new Date()

  }
  
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('BookUsers', bookusers)


  },

  down: async (queryInterface, Sequelize) => {
   
    return bulkDelete('BookUsers', null, {})

  }
};
