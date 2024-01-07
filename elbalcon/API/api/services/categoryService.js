const boom=require('@hapi/boom');
//const getConnection = require('../../libs/postgress'); NO ESTOY HACIENDO SELECTS, POR TANTO NO SE USARÁ

const {models}= require('../../libs/sequelize')

class CategoriesService {
  constructor() {}

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    // Corregir la línea siguiente para utilizar models.Categories en lugar de models.Menu
    const rta = await models.Category.findAll();
    return rta;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id,{
      include: ['menu']
    });
    if (!category) {
      throw boom.notFound('Item not found');
    }
    return category;
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

module.exports = CategoriesService;
