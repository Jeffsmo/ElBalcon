const { Model, DataTypes, Sequelize } = require('sequelize');

const RECORD_COSTS_TABLE = 'recordCosts';

const RecordCostsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  week: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  totalPrice: {
    field: 'total_price',
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at', // Corregido a 'createdAt'
    defaultValue: Sequelize.NOW,
  },
};

class RecordCosts extends Model {
  static associate(models) {
    this.hasMany(models.Costs, {
      as: 'RecordedCosts',
      foreignKey: 'recordCostId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RECORD_COSTS_TABLE,
      modelName: 'RecordCosts',
      timestamps: false,
    };
  }
}

module.exports = { RECORD_COSTS_TABLE, RecordCostsSchema, RecordCosts };
