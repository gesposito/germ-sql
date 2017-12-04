'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    const date = new Date();
    return queryInterface.bulkInsert('Events', [
      {
        id: 1,
        name: 'React Europe',
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 2,
        name: 'React.js conf',
        createdAt: date,
        updatedAt: date,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('Events', null, {});
  }
};
