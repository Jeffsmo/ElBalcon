const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(4);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();


const createMenuSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image,
  categoryId: categoryId,
})

const updateMenuSchema = Joi.object({
  id: id,
  name: name,
  price: price,
  image: image,
  categoryId:categoryId,
})

const getMenuSchema = Joi.object({
  id: id.required(),
})

module.exports = {createMenuSchema, updateMenuSchema, getMenuSchema}
