'use strict';


//IMPORTACIONES DE LOS MODULOS
const { CostsrSchema, COST_TABLE} = require('../models/costsModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(COST_TABLE, CostsrSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(COST_TABLE);
  }
};

