'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    categoryId: 
    { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: DataTypes.STRING
  }, {});
  Categories.associate = function(models) {
    // associations can be defined here
  };
  return Categories;
};