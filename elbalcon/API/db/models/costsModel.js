const {Model, DataTypes, Sequelize} = require('sequelize');
const { RECORD_COSTS_TABLE } = require('./recordCostsModel');

const COST_TABLE = 'costs';

const CostsSchema = {
  id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
  },
  product:{
      allowNull:false,
      type: DataTypes.STRING,
  },
  description:{
    allowNull: true,
    type: DataTypes.TEXT,
    field: 'description'
  },
  value:{
      allowNull:false,
      type: DataTypes.INTEGER,
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
  recordCostId:{
    allowNull:false,
    type:DataTypes.INTEGER,
    field: 'record_cost_id',
    references: {
      model: RECORD_COSTS_TABLE,
      key: 'id', // <-- Corrected to lowercase 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },

}

class Costs extends Model {
  static associate(models){
    this.belongsTo(models.RecordCosts, {
      as: 'RecordCost', // Asegúrate de que el alias coincida con el que estás utilizando en las consultas
      foreignKey: 'recordCostId', // Asegúrate de que la clave foránea sea la correcta
    });
  }
  static config(sequelize){
      return{
          sequelize,
          tableName: COST_TABLE,
          modelName: 'Costs',
          timestamps: false
      }
  }
}

module.exports = {COST_TABLE, CostsSchema, Costs}
