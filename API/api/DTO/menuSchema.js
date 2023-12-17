const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(4);
const price = Joi.number().integer().min(10);


const createMenuSchema = Joi.object({
  name: name.required(),
  price: price.required(),

})

const updateMenuSchema = Joi.object({
  id: id,
  name: name,
  price: price,
})

const getMenuSchema = Joi.object({
  id: id.required(),
})

module.exports = {createMenuSchema, updateMenuSchema, getMenuSchema}
