'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Book , {
        through: models.BookUser
      })
      User.hasMany(models.BookUser)
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
    hooks : {
      beforeCreate : (user, options) => {
        const saltRounds = 10
        let salt = bcrypt.genSaltSync(saltRounds)
        let hash = bcrypt.hashSync(user.password, salt)
        user.password = hash
      }
    }, 
    sequelize,
    modelName: 'User',
  });
  return User;
};