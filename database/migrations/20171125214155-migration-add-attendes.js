'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Attendees', {
      EventId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Event",
          key: "id"
        },
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: "id"
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Attendees');
  }
};