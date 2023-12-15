const Joi = require('joi');

const id = Joi.number().integer();
const product = Joi.string();
const value = Joi.number().integer().min(100);
//const role = Joi.string().min(5)

const createCostsSchema = Joi.object({
  product: product.required(),
  value: value.required(),
  //role: role.required()
});

const updateCostsSchema = Joi.object({
  product: product,
  value: value,
  //role: role,
});

const getCostsSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCostsSchema, updateCostsSchema, getCostsSchema }
