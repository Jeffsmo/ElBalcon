const boom = require('@hapi/boom');
const { models } = require('../../libs/sequelize');

class SalesService {
  constructor() {}

  async create(data) {
    const newSale = await models.Sales.create(data);
    return newSale;
  }

  async find() {
    const rta = await models.Sales.findAll({
      include: [{ model: models.Menu, as: 'menu', include: ['images'] }],
    });
    return rta;
  }

  async findOne(id) {
    const sale = await models.Sales.findByPk(id, {
      include: [{ model: models.Menu, as: 'menu', include: ['images'] }],
    });

    if (!sale) {
      throw boom.notFound('Sale not found');
    }

    return sale;
  }

  async update(id, changes) {
    const sale = await this.findOne(id);
    const rta = await sale.update(changes);
    return rta;
  }

  async delete(id) {
    const sale = await this.findOne(id);
    await sale.destroy();
    return { id };
  }
}

module.exports = SalesService;
