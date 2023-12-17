const {Model, DataTypes} = require('sequelize');

const MENU_TABLE = 'menu';

const MenuSchema = {
  id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
  },
  name:{
      allowNull:false,
      unique:true,
      type: DataTypes.STRING,
  },
  price:{
      allowNull:false,
      type: DataTypes.INTEGER,
  },
}

class Menu extends Model {
  static associate(){
      //associate
  }
  static config(sequelize){
      return{
          sequelize,
          tableName: MENU_TABLE,
          modelName: 'Menu',
          timestamps: false
      }
  }
}

module.exports = {MENU_TABLE,  MenuSchema,  Menu}
