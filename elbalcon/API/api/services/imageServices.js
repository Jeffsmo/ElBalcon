

const boom=require('@hapi/boom');
//const getConnection = require('../../libs/postgress'); NO ESTOY HACIENDO SELECTS, POR TANTO NO SE USARÁ

const {models}= require('../../libs/sequelize')

class ImageServices {
  constructor() {}

  async create(data) {
    const newCategory = await models.Image.create(data);
    return newCategory;
  }

  async find() {
    // Corregir la línea siguiente para utilizar models.Categories en lugar de models.Menu
    const rta = await models.Image.findAll();
    return rta;
  }

  async findOne(id) {
    const category = await models.Image.findByPk(id);
    if (!category) {
      throw boom.notFound('Item not found');
    }
    return category;
  }

  async update(id, changes) {
    const image = await this.findOne(id);
    const rta = await image.update(changes);
    return rta;
  }

  async delete(id) {
    const image = await this.findOne(id);
    await image.destroy();
    return { id, name: image.name };
  }
}

module.exports = ImageServices;

