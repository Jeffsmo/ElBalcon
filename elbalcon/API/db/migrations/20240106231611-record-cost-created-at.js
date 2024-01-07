'use strict';

const { RECORD_COSTS_TABLE, RecordCostsSchema } = require('../models/recordCostsModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
     await queryInterface.addColumn(RECORD_COSTS_TABLE,'created_at',RecordCostsSchema.createdAt)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(RECORD_COSTS_TABLE,'created_at')
  }
};
