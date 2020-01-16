'use strict';
module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define('Courses', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    is_important: DataTypes.BOOLEAN,
    link: DataTypes.STRING
  }, {});
  Courses.associate = function(models) {
    // associations can be defined here
  };
  return Courses;
};