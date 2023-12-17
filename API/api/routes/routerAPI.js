const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./userRouter');
const costsRouter = require('./costsRouter');
const salesRouter = require('./salesRouter');
const menuRouter = require('./menuRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use('/costs', costsRouter);
    router.use('/menu', menuRouter);
    router.use('/sales', salesRouter);
}

module.exports = routerApi;
