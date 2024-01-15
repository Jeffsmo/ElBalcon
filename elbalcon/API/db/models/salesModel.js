const {Model, DataTypes, Sequelize} = require('sequelize');

const {MENU_TABLE} = require('./menuModel');
const { RECORD_SALES_TABLE } = require('./recordSalesModel');

const SALES_TABLE = 'sales';


const SalesSchema = {
  boardId:{
      allowNull: false,
      autoIncrement: false,
      type: DataTypes.INTEGER,
      field: 'MESA',
  },
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
},
  sale:{
      allowNull:true,
      type: DataTypes.STRING,
  },

  Date:{
      allowNull: false,
      type: DataTypes.DATE,
      field: 'create_at',
      defaultValue: Sequelize.NOW,
  },

  day:{
    allowNull:false,
    type: DataTypes.INTEGER,
    field: 'Day'
  },
  month:{
    allowNull:false,
    type:DataTypes.INTEGER,
    field: 'Month',

  },
  year:{
    allowNull:false,
    type:DataTypes.INTEGER,
    field: 'Year',
  },
  menuId: {
    field: 'menu_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MENU_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  recordSaleId: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'record_sale_id',
    references: {
      model: RECORD_SALES_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },

}

class Sales extends Model {
  static associate(models) {
    this.belongsTo(models.Menu, { as: 'menu' });
    this.belongsTo(models.RecordSales, {
      as: 'RecordSales',
      foreignKey: 'recordSaleId', // Use lowercase 'r'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SALES_TABLE,
      modelName: 'Sales',
      timestamps: false,
    };
  }
}

module.exports = { SALES_TABLE,  SalesSchema,  Sales}
