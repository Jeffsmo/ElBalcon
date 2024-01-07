'use strict';

const { SalesSchema, SALES_TABLE} = require('../models/salesModel');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(SALES_TABLE, SalesSchema);

  },

  async down (queryInterface) {
    await queryInterface.dropTable(SALES_TABLE);
  }
};
