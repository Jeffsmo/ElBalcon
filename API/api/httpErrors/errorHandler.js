//Los Middlewares de tipo error se deben hacer después de hacer el routing...
const {ValidationError} = require('sequelize');



function logErrors(err, req, res, next){
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
  next(err);
}

function boomErrorHandler(err, req, res, next){
  if (err.isBoom === true)
  {
    const {output} = err;
    res.status(output.statusCode).json(output.payload)
  }
  else
  {
    next(err);
  }
}


function ormErrorHandler(err,req,res,next){
  if(err instanceof ValidationError){
    res.status(409).json({
      statusCode: 409,
      message: err.message,
      errors: err.errors
    });
  }
  next(err);

}


module.exports = {logErrors, errorHandler,ormErrorHandler, boomErrorHandler};
