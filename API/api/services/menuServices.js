const boom=require('@hapi/boom');
//const getConnection = require('../../libs/postgress'); NO ESTOY HACIENDO SELECTS, POR TANTO NO SE USARÁ

const {models}= require('../../libs/sequelize')

class MenuService
{
    constructor(){}
    async create(data)
    {
      const newItem = await models.Menu.create(data);
      return newItem;
    }
    async find(){
      const rta= await models.Menu.findAll();
      return rta;
  }
    async findOne(id)
    {
      const menu = await models.Menu.findByPk(id);
      if(!menu){
        throw boom.notFound('item not found')
      }
      return menu;
    }
    async update(id,changes)
    {
      const menu = await this.findOne(id);
      const rta = await menu.update(changes);
      return rta;
    }
    async delete(id)
    {
      const menu = await this.findOne(id);
      await menu.destroy();
      return {id, name: menu.name};
    }
  }
module.exports=MenuService;
