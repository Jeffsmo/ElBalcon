const boom=require('@hapi/boom');
//const getConnection = require('../../libs/postgress'); NO ESTOY HACIENDO SELECTS, POR TANTO NO SE USARÁ

const {models}= require('../../libs/sequelize')

class CostsService
{
    constructor(){}
    async create(data)
    {
      const newCost = await models.Costs.create(data);
      return newCost;
    }
    async find(){
      const rta= await models.Costs.findAll();
      return rta;
  }
    async findOne(id)
    {
      const cost = await models.Costs.findByPk(id,{
        include : ['RecordCost']
      });
      if(!cost){
        throw boom.notFound('user not found')
      }
      return cost;
    }
    async update(id,changes)
    {
      const cost = await this.findOne(id);
      const rta = await cost.update(changes);
      return rta;
    }
    async delete(id)
    {
      const cost = await this.findOne(id);
      await cost.destroy();
      return {id};
    }
  }
module.exports=CostsService;
