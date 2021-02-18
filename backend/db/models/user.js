'use strict';

const { ValidatorsImpl } = require("express-validator/src/chain");
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4,30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  }, {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
    // these scopes help protect sensitive user information that should not be exposed regarding the current session's user or to other users
  });
  User.associate = function(models) {
    // associations can be defined here
  };

    // returns an object with the User instance information that is safe to save to a JWT
  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  // accepts a password string and returns true if there is a match with the User instance's hashedPassword, otherwise return false
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  // accepts an id and returns a User with that id using the currentUser scope
  User.getCurrentUserById = async function (id) {
  return await User.scope('currentUser').findByPk(id);
  };

  // accepts an object with a credential and password key and find a User with a username or email with the specified credential using the loginUser scope
  // if a user is found, then validate the password by passing it into the instance's .validatePassword method
  // if the password is valid, then return the user with the currentUser scope
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  // accepts an object with a username, email, and password key
  // hashes the password using bcryptjs package's hashSync method
  // creates a user with the username, email, and hashedPassword
  // returns the creted user with the currentUser scope
  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  return User;
};

