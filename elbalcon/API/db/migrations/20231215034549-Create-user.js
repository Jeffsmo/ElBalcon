'use strict';

//QUERY INTERFACE GENERADA POR SEQUELIZE




//IMPORTACIONES DE LOS MODULOS
const { UserSchema, USER_TABLE} = require('../models/userModel');




/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
  }
};
