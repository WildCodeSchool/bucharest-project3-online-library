'use strict';
module.exports = (sequelize, DataTypes) => {
  const keywordCourses = sequelize.define('keywordCourses', {
    id: {type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    course_id: DataTypes.INTEGER,
    keyword_id: DataTypes.INTEGER
  }, {});
  keywordCourses.associate = function(models) {
    // associations can be defined here
  };
  return keywordCourses;
};