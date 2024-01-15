'use strict';

const { RECORD_SALES_TABLE, RecordSalesSchema } = require('../models/recordSalesModel');
const { SALES_TABLE, SalesSchema } = require('../models/salesModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.dropTable(RECORD_SALES_TABLE)
    await queryInterface.dropTable(SALES_TABLE)
    await queryInterface.createTable(RECORD_SALES_TABLE, RecordSalesSchema);
    await queryInterface.createTable(SALES_TABLE, SalesSchema);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
