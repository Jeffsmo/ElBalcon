'use strict';

const { CATEGORY_TABLE, CategorySchema } = require('../models/categoryModel');
const { MENU_TABLE, MenuSchema } = require('../models/menuModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.addColumn(MENU_TABLE, 'image', MenuSchema.image);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.removeColumn(MENU_TABLE, 'image');
  }
};
