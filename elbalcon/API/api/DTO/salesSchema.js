const Joi = require('joi');


const id = Joi.number().integer();
const boardId = Joi.number().integer();
const sale = Joi.string();
const day = Joi.number().integer().min(1).max(31);
const month = Joi.number().integer().min(1).max(12);
const year = Joi.number().integer().min(2000).max(3000);
const menuId = Joi.number().integer();


const createSalesSchema = Joi.object({
  boardId: boardId.required(),
  sale: sale,
  day: day.required(),
  month: month.required(),
  year: year.required(),
  menuId: menuId.required(),


});

const updateSalesSchema = Joi.object({
  boardId: boardId.required(),
  sale: sale,
  day: day.required(),
  month: month.required(),
  year: year.required(),
  menuId: menuId,
});

const getSalesSchema = Joi.object({
  boardId:  boardId,
  id: id.required(),
});

module.exports = {  createSalesSchema,  updateSalesSchema,  getSalesSchema }
