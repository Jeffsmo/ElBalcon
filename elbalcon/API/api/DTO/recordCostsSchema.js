const Joi = require('joi');

const id = Joi.number().integer();
const week = Joi.string();
const totalPrice = Joi.number().integer()



const createRecordCostsSchema = Joi.object({
  week: week.required(),
  totalPrice: totalPrice,
})

const updateRecordCostsSchema = Joi.object({
  id: id.required(),
  week: week,
  totalPrice: totalPrice,
})

const getRecordCostsSchema = Joi.object({
  id: id.required(),
})

module.exports = { createRecordCostsSchema,  updateRecordCostsSchema,   getRecordCostsSchema}
