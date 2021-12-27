module.exports = (sequelize, DataTypes) => {
  const AppMonth = sequelize.define('AppMonth', {
    year: { type: DataTypes.INTEGER },
    month: { type: DataTypes.INTEGER },
    average: { type: DataTypes.NUMERIC(15, 2) },
    peak: { type: DataTypes.INTEGER },
    gain: { type: DataTypes.NUMERIC(15, 2) },
    percentGain: { type: DataTypes.NUMERIC(10, 2) }
  },
  {
    tableName: 'app_months',
    indexes: [
      {
        unique: true,
        fields: ['app_id', 'year', 'month']
      }
    ]
  });

  AppMonth.associate = (models) => {
    models.AppMonth.belongsTo(models.App, { onDelete: 'CASCADE', allowNull: false });
  }

  return AppMonth;
}