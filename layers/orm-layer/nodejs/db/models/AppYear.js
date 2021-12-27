module.exports = (sequelize, DataTypes) => {
  const AppYear = sequelize.define('AppYear', {
    year: { type: DataTypes.INTEGER },
    average: { type: DataTypes.NUMERIC(15, 2) },
    peak: { type: DataTypes.INTEGER },
    gain: { type: DataTypes.NUMERIC(15, 2) },
    percentGain: { type: DataTypes.NUMERIC(10, 2) }
  },
  {
    tableName: 'app_years',
    indexes: [
      {
        unique: true,
        fields: ['app_id', 'year']
      }
    ]
  });

  AppYear.associate = (models) => {
    models.AppYear.belongsTo(models.App, { onDelete: 'CASCADE', allowNull: false });
  }

  return AppYear;
}