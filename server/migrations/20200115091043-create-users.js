'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      phonenumber: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      volunteering_county: {
        type: Sequelize.STRING
      },
      volunteering_center: {
        type: Sequelize.STRING
      },
      contract_number: {
        type: Sequelize.INTEGER
      },
      signing_date: {
        type: Sequelize.INTEGER
      },
      date_joined: {
        type: Sequelize.INTEGER
      },
      access_level: {
        type: Sequelize.BOOLEAN
      },
      status: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};