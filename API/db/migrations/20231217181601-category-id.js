'use strict';

const { MENU_TABLE, MenuSchema } = require('../models/menuModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(MENU_TABLE, 'category_id', MenuSchema.categoryId);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(MENU_TABLE,'category_id');
  }
};
