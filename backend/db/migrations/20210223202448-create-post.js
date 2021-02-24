'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING(10),
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      text: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.STRING(255),
      },
      link: {
        type: Sequelize.STRING(255),
      },
      video: {
        type: Sequelize.STRING(255),
      },
      numLikes: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};