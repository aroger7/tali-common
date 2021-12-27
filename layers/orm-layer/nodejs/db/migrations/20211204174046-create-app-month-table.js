'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('app_months', {
      id: { 
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
        allowNull: false,
        primaryKey: true
      },
      year: { type: Sequelize.INTEGER },
      month: { type: Sequelize.INTEGER },
      average: { type: Sequelize.NUMERIC(15, 2) },
      peak: { type: Sequelize.INTEGER },
      gain: { type: Sequelize.NUMERIC(15, 2) },
      percent_gain: { type: Sequelize.NUMERIC(10, 2) },
      app_id: { 
        type: Sequelize.INTEGER,
        references: {
          model: 'apps',
          key: 'id'
        },
        allowNull: false
      },
      created_at: { 
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: { type: Sequelize.DATE }
    });

    await queryInterface.addIndex('app_months', {
      fields: ['app_id', 'year', 'month'],
      unique: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('app_months');
  }
};
