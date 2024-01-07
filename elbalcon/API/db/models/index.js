/// AQUI VAN TODOS LOS MODELOS DE LA DB


const { User, UserSchema} = require('./userModel');
const {Costs, CostsSchema} = require('./costsModel');
const {Sales, SalesSchema} = require('./salesModel');
const {Menu, MenuSchema} = require('./menuModel');
const {Category, CategorySchema} = require('./categoryModel');
const {Image, ImageSchema} = require('./imageModel');
const {RecordCosts, RecordCostsSchema} = require('./recordCostsModel')


function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Costs.init(CostsSchema, Costs.config(sequelize));
    Sales.init(SalesSchema, Sales.config(sequelize));
    Menu.init(MenuSchema, Menu.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    Image.init(ImageSchema, Image.config(sequelize));
    RecordCosts.init(RecordCostsSchema, RecordCosts.config(sequelize))


    Image.associate(sequelize.models);
    Sales.associate(sequelize.models);
    Category.associate(sequelize.models);
    Menu.associate(sequelize.models);
    Costs.associate(sequelize.models);
    RecordCosts.associate(sequelize.models);

}

module.exports = {setupModels};
