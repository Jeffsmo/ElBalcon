const boom=require('@hapi/boom');
//const getConnection = require('../../libs/postgress'); NO ESTOY HACIENDO SELECTS, POR TANTO NO SE USARÁ

const {models}= require('../../libs/sequelize')

class RecordCostsService {
  constructor() {}

  async create(data) {
    const newRecordCost = await models.RecordCosts.create(data);
    return newRecordCost;
  }

  async find() {
    // Corregir la línea siguiente para utilizar models.Categories en lugar de models.Menu
    const rta = await models.RecordCosts.findAll();
    return rta;
  }

  async findOne(id) {
    const recordCosts = await models.RecordCosts.findByPk(id,{
      include: ['RecordedCosts']
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

module.exports = RecordCostsService;
