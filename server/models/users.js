'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    phonenumber: DataTypes.INTEGER,
    email: DataTypes.STRING,
    volunteering_county: DataTypes.STRING,
    volunteering_center: DataTypes.STRING,
    contract_number: DataTypes.INTEGER,
    signing_date: DataTypes.DATE,
    date_joined: DataTypes.DATE,
    access_level: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};