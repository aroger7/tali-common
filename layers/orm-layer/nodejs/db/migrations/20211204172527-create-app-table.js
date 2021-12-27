'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('apps',
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: false },
      name: { type: Sequelize.STRING, allowNull: false },
      current: { type: Sequelize.INTEGER, defaultValue: 0 },
      average: { type: Sequelize.NUMERIC(15,2) },
      average24_hours: { type: Sequelize.NUMERIC(15,2) },
      peak: { type: Sequelize.INTEGER },
      peak24_hours: { type: Sequelize.INTEGER },
      created_at: { 
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: { type: Sequelize.DATE }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('apps')
  }
};
