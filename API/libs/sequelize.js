// IMPORTACIONES
const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const { setupModels } = require('../db/models/index');


//sequelize es la conexión con la base de datos


//VARIABLES DE AMBIENTE
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}` ;

//CONFIGURACIÓN DE ORM
const sequelize = new Sequelize(URI, {
  dialect:'postgres',
  logging:true,

});

setupModels(sequelize);

//sequelize.sync(); NO CORRER SEQUELIZE SYNC() EN PRODUCCIÓN

module.exports = sequelize;
