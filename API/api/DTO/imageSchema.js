const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(4);
const typeFile = Joi.string();



const createImageSchema = Joi.object({
  name: name,
  typeFile: typeFile,
})

const updateImageSchema = Joi.object({
  id: id,
  name: name,
})

const getImageSchema = Joi.object({
  id: id.required(),
})

module.exports = {createImageSchema, updateImageSchema,  getImageSchema}
