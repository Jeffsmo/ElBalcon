/// AQUI VAN TODOS LOS MODELOS DE LA DB


const { User, UserSchema} = require('./userModel');
const {Costs, CostsSchema} = require('./costsModel');

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Costs.init(CostsSchema, Costs.config(sequelize));

}

module.exports = {setupModels};
