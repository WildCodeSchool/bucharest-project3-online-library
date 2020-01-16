'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keywords = sequelize.define('Keywords', {
    keywordId: 
    { type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    keyword_text: DataTypes.STRING
  }, {});
  Keywords.associate = function(models) {
    // associations can be defined here
  };
  return Keywords;
};