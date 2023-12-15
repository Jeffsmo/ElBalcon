const {Model, DataTypes, Sequelize} = require('sequelize');

const USER_TABLE = 'costs';

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
  value:{
      allowNull:false,
      type: DataTypes.FLOAT,
  },
  Date:{
      allowNull: false,
      type: DataTypes.DATE,
      field: 'create_at',
      defaultValue: Sequelize.NOW,
  }
}

class Costs extends Model {
  static associate(){
      //associate
  }
  static config(sequelize){
      return{
          sequelize,
          tableName: USER_TABLE,
          modelName: 'Costs',
          timestamps: false
      }
  }
}

module.exports = {USER_TABLE, CostsSchema, Costs}
