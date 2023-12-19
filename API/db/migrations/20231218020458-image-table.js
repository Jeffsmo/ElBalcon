'use strict';

const { IMAGE_TABLE, ImageSchema } = require('../models/imageModel');
const { MENU_TABLE } = require('../models/menuModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(IMAGE_TABLE, ImageSchema);
    await queryInterface.removeColumn(MENU_TABLE,'image');

  },

  async down (queryInterface) {
    await queryInterface.dropTable(IMAGE_TABLE);
    await queryInterface.removeColumn(MENU_TABLE, 'image_id');
  }
};
