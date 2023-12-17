'use strict';
const { MenuSchema, MENU_TABLE} = require('../models/menuModel');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(MENU_TABLE, MenuSchema);

  },

  async down (queryInterface) {
    await queryInterface.dropTable(MENU_TABLE);
  }
};
