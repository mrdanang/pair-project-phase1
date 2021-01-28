'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BookUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        reference : {
          model : { tableName: 'Users'},
          key : 'id'
        },
        onDelete : 'cascade',
        onUpdate : 'cascade'
      },
      BookId: {
        type: Sequelize.INTEGER,
        reference : {
          model : { tableName: 'Books'},
          key : 'id'
        },
        onDelete : 'cascade',
        onUpdate : 'cascade'
      },
      start_borrow_time: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BookUsers');
  }
};