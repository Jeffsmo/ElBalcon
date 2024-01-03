const {Model, DataTypes, Sequelize} = require('sequelize');

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
}

class Costs extends Model {
  static associate(){
      //associate
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
