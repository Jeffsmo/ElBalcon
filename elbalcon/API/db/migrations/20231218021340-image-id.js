'use strict';

const { MENU_TABLE, MenuSchema } = require('../models/menuModel');
const {IMAGE_TABLE, ImageSchema} = require('../models/imageModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(IMAGE_TABLE, ImageSchema)
    await queryInterface.addColumn(MENU_TABLE, 'image', MenuSchema.image);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(MENU_TABLE, 'image');
  }
};
