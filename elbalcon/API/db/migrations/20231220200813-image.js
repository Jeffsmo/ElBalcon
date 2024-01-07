'use strict';


const {MENU_TABLE ,  MenuSchema}= require('../models/menuModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(MENU_TABLE, 'image', MenuSchema.imagesId);
  },

  async down (queryInterface) {
    await queryInterface.addColumn(MENU_TABLE, 'image', MenuSchema.imagesId);
  }
};
