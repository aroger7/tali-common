'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('player_counts', {
      id: { 
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
        primaryKey: true
      },
      count: { type: Sequelize.INTEGER },
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
      }
    });

    await queryInterface.addIndex('player_counts', {
      fields: ['app_id', 'created_at'],
      unique: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('player_counts');
  }
};
