const Joi = require('joi');

const id = Joi.number().integer();
const week = Joi.string();
const totalPrice = Joi.number().integer()



const createRecordSalesSchema = Joi.object({
  week: week.required(),
  totalPrice: totalPrice,
})

const updateRecordSalesSchema = Joi.object({
  id: id,
  week: week,
  totalPrice: totalPrice,
})

const getRecordSalesSchema = Joi.object({
  id: id,
})

module.exports = {  createRecordSalesSchema,   updateRecordSalesSchema,  getRecordSalesSchema}
