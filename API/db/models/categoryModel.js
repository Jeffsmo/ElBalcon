const {Model, DataTypes} = require('sequelize');


const CATEGORY_TABLE = 'category';


const CategorySchema = {

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

}

class Category extends Model {
  static associate(models){
      this.hasMany(models.Menu, {
        as: 'menu',
        foreignKey: 'categoryId'
      });
  }
  static config(sequelize){
      return{
          sequelize,
          tableName: CATEGORY_TABLE,
          modelName: 'Category',
          timestamps: false
      }
  }
}

module.exports = { CATEGORY_TABLE,   CategorySchema,    Category}
