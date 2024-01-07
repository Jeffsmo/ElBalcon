'use strict';

const { RECORD_COSTS_TABLE, RecordCostsSchema } = require('../models/recordCostsModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(RECORD_COSTS_TABLE, RecordCostsSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(RECORD_COSTS_TABLE)
  }
};
