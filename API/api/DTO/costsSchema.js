const Joi = require('joi');

const id = Joi.number().integer();
const product = Joi.string();
const value = Joi.number().integer().min(100);
const day = Joi.number().integer().min(1).max(31);
const month = Joi.number().integer().min(1).max(12);
const year = Joi.number().integer().min(2023).max(3000);
const description = Joi.string()

const createCostsSchema = Joi.object({
  product: product.required(),
  value: value.required(),
  day: day.required(),
  month: month.required(),
  year: year.required(),
  description: description,
});

const updateCostsSchema = Joi.object({
  product: product,
  value: value,
  day: day,
  month: month,
  year: year,
  description: description,
});

const getCostsSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCostsSchema, updateCostsSchema, getCostsSchema }
