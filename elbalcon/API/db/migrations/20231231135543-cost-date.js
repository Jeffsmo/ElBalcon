'use strict';

const { COST_TABLE, CostsSchema } = require("../models/costsModel");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(COST_TABLE, 'Day',CostsSchema.day);
    await queryInterface.addColumn(COST_TABLE, 'Month',CostsSchema.month);
    await queryInterface.addColumn(COST_TABLE, 'Year',CostsSchema.year);

  },

  async down (queryInterface) {
    await queryInterface.removeColumn(COST_TABLE, 'Day');
    await queryInterface.removeColumn(COST_TABLE, 'Month');
    await queryInterface.removeColumn(COST_TABLE, 'Year');
  }
};
