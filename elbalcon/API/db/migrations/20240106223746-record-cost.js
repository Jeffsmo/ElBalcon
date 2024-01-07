'use strict';

const { COST_TABLE, CostsSchema } = require('../models/costsModel');
const { RECORD_COSTS_TABLE, RecordCostsSchema } = require('../models/recordCostsModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(RECORD_COSTS_TABLE, RecordCostsSchema)
    await queryInterface.addColumn(COST_TABLE, 'record_cost_id', CostsSchema.recordCostId)

  },

  async down (queryInterface) {
    await queryInterface.dropTable(RECORD_COSTS_TABLE)
    await queryInterface.removeColumn(COST_TABLE, 'record_cost_id')
  }
};
