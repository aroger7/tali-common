module.exports = (sequelize, DataTypes) => {
  const PlayerCount = sequelize.define('PlayerCount', {
    count: { type: DataTypes.INTEGER }
  }, 
  {
    tableName: 'player_counts',
    indexes: [
      {
        unique: false,
        fields: ['app_id', 'createdAt']
      }
    ],
    timestamps: true,
    updatedAt: false
  });

  PlayerCount.associate = models => {
    models.PlayerCount.belongsTo(models.App, { onDelete: 'CASCADE', allowNull: false, foreignKey: 'app_id' });
  }

  return PlayerCount;
};