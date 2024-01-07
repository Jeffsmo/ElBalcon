const { Model, DataTypes, Sequelize } = require('sequelize');

const RECORD_SALES_TABLE = 'recordCosts';

const RecordSalesSchema = {
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

class RecordSales extends Model {
  static associate(models) {
    this.hasMany(models.Sales, {
      as: 'RecordedSales',
      foreignKey: 'recordSaleId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RECORD_SALES_TABLE,
      modelName: 'RecordSales',
      timestamps: false,
    };
  }
}

module.exports = { RECORD_SALES_TABLE, RecordSalesSchema,  RecordSales };
