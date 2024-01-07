'use strict';

const { COST_TABLE, CostsSchema } = require('../models/costsModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(COST_TABLE, CostsSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(COST_TABLE);
  }
};
