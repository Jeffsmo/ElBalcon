const boom=require('@hapi/boom');
//const getConnection = require('../../libs/postgress'); NO ESTOY HACIENDO SELECTS, POR TANTO NO SE USARÁ

const {models}= require('../../libs/sequelize')

class RecordSalesService {
  constructor() {}

  async create(data) {
    const newRecordCost = await models.RecordSales.create(data);
    return newRecordCost;
  }

  async find() {
    // Corregir la línea siguiente para utilizar models.Categories en lugar de models.Menu
    const rta = await models.RecordSales.findAll();
    return rta;
  }

  async findOne(id) {
    const recordCosts = await models.RecordSales.findByPk(id,{
      include: ['RecordedSales']
    });
    if (!recordCosts) {
      throw boom.notFound('Item not found');
    }
    return recordCosts;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return { id, name: category.name };
  }
}

module.exports = RecordSalesService;
