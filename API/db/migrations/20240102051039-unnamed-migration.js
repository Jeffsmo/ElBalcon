'use strict';

const { COST_TABLE, CostsSchema } = require('../models/costsModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(COST_TABLE, 'description', CostsSchema.description);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(COST_TABLE, 'description');
  }
};
