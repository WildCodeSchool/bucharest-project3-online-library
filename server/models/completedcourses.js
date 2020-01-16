'use strict';
module.exports = (sequelize, DataTypes) => {
  const completedCourses = sequelize.define('completedCourses', {
    id: {type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    course_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  completedCourses.associate = function(models) {
    // associations can be defined here
  };
  return completedCourses;
};