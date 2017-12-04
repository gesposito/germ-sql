'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    const date = new Date();
    return queryInterface.bulkInsert('Attendees', [
      {
        EventId: 1,
        UserId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        EventId: 2,
        UserId: 1,
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
    return queryInterface.bulkDelete('Attendees', null, {});
  }
};
