'use strict';

const { RECORD_SALES_TABLE, RecordSalesSchema } = require('../models/recordSalesModel');
const { SALES_TABLE, SalesSchema } = require('../models/salesModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(RECORD_SALES_TABLE,RecordSalesSchema);
    await queryInterface.addColumn(SALES_TABLE, 'record_sale_id', SalesSchema.recordSaleId);

  },

  async down (queryInterface) {
    await queryInterface.dropTable(RECORD_SALES_TABLE);
    await queryInterface.removeColumn(SALES_TABLE, 'record_sale_id');
  }
};
