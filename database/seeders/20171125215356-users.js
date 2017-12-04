'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    const date = new Date();
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'Gianluca',
        username: 'gesposito',
        createdAt: date,
        updatedAt: date,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
