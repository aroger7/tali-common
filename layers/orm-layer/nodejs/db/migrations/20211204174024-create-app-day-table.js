'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('app_days',
    {
      id: { 
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
        allowNull: false,
        primaryKey: true
      },
      year: { type: Sequelize.DataTypes.INTEGER },
      month: { type: Sequelize.DataTypes.INTEGER },
      day: { type: Sequelize.DataTypes.INTEGER },
      peak: { type: Sequelize.DataTypes.INTEGER },
      average: { type: Sequelize.DataTypes.NUMERIC(15, 2) },
      gain: { type: Sequelize.DataTypes.NUMERIC(15, 2) },
      percent_gain: { type: Sequelize.DataTypes.NUMERIC(10, 2) },
      app_id: { 
        type: Sequelize.DataTypes.INTEGER,
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

    await queryInterface.addIndex('app_days', {
      fields: ['app_id', 'year', 'month', 'day'],
      unique: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('app_days');
  }
};
