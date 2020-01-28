'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      category_name: 'Materiale Traininguri'
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};


// const categories = ['Materiale Traininguri', 'Info admistrative', 'Materiale coordonatori', 'Jocuri', 'Ateliere', 'Suporturi de curs', 'Psihologie']
