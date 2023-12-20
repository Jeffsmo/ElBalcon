const express = require('express');
const routerApi = require('./routes/routerAPI');
const cors = require('cors');
const {logErrors,queryErrorHandler, errorHandler, boomErrorHandler, ormErrorHandler} = require('./httpErrors/errorHandler');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); //Estos tambien son Middlewares...
//app.use(cors()); ----->>> ESTO DA ACCESO A TODOS LOS ORIGENES, CUIDADO!!...

const whitelist= ['http://localhost:8080', 'http://localhost:5173', 'http://localhost:5050 '];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){callback(null, true)}
    else{callback(new Error('Access not allowed'))}
  }
}
app.use(cors(options));

app.get('/api', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/api/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});
app.use('/api/v1/image/public', express.static(path.join(__dirname,'../public/img/uploads')))

routerApi(app);

//EL orden en que coloquemos los middlewares van a ser
//el orden en que se estén ejecutando...
app.use(queryErrorHandler);
app.use(logErrors); //Los middlewares se utilizan en el metodo .use()...
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(ormErrorHandler);



app.listen(port, () => {
  console.log('Mi port' +  port);
});
