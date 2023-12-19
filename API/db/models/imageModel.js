const { Model, DataTypes } = require('sequelize');
//const { CATEGORY_TABLE } = require('./categoryModel');
const IMAGE_TABLE = 'image';

const ImageSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  typeImage: {
    allowNull: true,
    type: DataTypes.STRING,
  }
};

class Image extends Model {
  static associate(models) {
    this.hasOne(models.Menu, {
       as: 'menuImage',
      foreignKey: 'imagesId'
      });

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: IMAGE_TABLE,
      modelName: 'Image',
      timestamps: false,
    };
  }
}

module.exports = { IMAGE_TABLE, ImageSchema, Image };
