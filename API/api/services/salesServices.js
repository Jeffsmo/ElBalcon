const boom=require('@hapi/boom');
//const getConnection = require('../../libs/postgress'); NO ESTOY HACIENDO SELECTS, POR TANTO NO SE USARÁ

const {models}= require('../../libs/sequelize')

class SalesService
{
    constructor(){}
    async create(data)
    {
      const newSale = await models.Sales.create(data);
      return newSale;
    }
    async find(){
      const rta= await models.Sales.findAll({
        include: ['menu'],
      });
      return rta;
  }
    async findOne(id)
    {
      const sale = await models.Sales.findByPk(id);
      if(!sale){
        throw boom.notFound('sale not found')
      }
      return sale;
    }
    async update(id,changes)
    {
      const sale = await this.findOne(id);
      const rta = await sale.update(changes);
      return rta;
    }
    async delete(id)
    {
      const sale = await this.findOne(id);
      await sale.destroy();
      return {id};
    }
  }
module.exports=SalesService;
