const express = require('express');


const usersRouter = require('./userRouter');
const costsRouter = require('./costsRouter');
const salesRouter = require('./salesRouter');
const menuRouter = require('./menuRouter');
const categoryRouter = require('./categoryRouter')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
    router.use('/users', usersRouter);
    router.use('/costs', costsRouter);
    router.use('/menu', menuRouter);
    router.use('/sales', salesRouter);
    router.use('/category', categoryRouter)
}

module.exports = routerApi;
