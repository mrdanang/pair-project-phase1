'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BookUser.belongsTo(models.Book)
      BookUser.belongsTo(models.User)
    }
  };
  BookUser.init({
    UserId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER,
    start_borrow_time: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BookUser',
  });
  return BookUser;
};