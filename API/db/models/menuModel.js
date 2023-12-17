const { Model, DataTypes } = require('sequelize');
const { CATEGORY_TABLE } = require('./categoryModel');
const MENU_TABLE = 'menu';

const MenuSchema = {
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
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  categoryId: {
    field:'category_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id', // <-- Corrected to lowercase 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Menu extends Model {
  static associate(models) {
    this.belongsTo(models.Category, { as: 'category' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MENU_TABLE,
      modelName: 'Menu',
      timestamps: false,
    };
  }
}

module.exports = { MENU_TABLE, MenuSchema, Menu };
