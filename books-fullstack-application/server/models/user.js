'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false,
      unique: {
        msg: "Email já existe",
      },
      validate: {
        isEmail: {
          msg: "Email inválido",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      defaultValue: "user",
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};