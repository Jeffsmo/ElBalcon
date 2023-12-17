/// AQUI VAN TODOS LOS MODELOS DE LA DB


const { User, UserSchema} = require('./userModel');
const {Costs, CostsSchema} = require('./costsModel');
const {Sales, SalesSchema} = require('./salesModel');
const {Menu, MenuSchema} = require('./menuModel');



function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Costs.init(CostsSchema, Costs.config(sequelize));
    Sales.init(SalesSchema, Sales.config(sequelize));
    Menu.init(MenuSchema, Menu.config(sequelize));


    Sales.associate(sequelize.models);


}

module.exports = {setupModels};
