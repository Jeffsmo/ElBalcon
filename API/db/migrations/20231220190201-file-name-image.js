'use strict';

const {IMAGE_TABLE, ImageSchema} = require('../models/imageModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(IMAGE_TABLE, 'file_name', ImageSchema.fileName);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(IMAGE_TABLE, 'file_name');
  }
};
