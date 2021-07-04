'use strict';

const express = require('express')// cargar el modulo
const app = express()//ejecutar express
const port = 3000 //definir el puerto

//Middleware, tuberias extra que se ejecutan con cada request
app.use(express.static(__dirname + '/public'));// set public folder

//Otro Middleware
app.use((req,res,next) => {
  console.log(__dirname)//root folder
  next();
}); 

//Routes
// app.get('/', (req, res, next) => {
//   //res.sendFile('index') //ruta a html
//   res.sendFile(path.join(__dirname, '../public', 'index.html'));
// }); // Ruta Home

app.get('/', function (req, res) {
    res.sendFile('views/index.html', { root: __dirname });
});


app.get('/about', (req, res, next) => {
    res.sendFile('views/about.html', { root: __dirname });
});// Ruta About

app.get('/galery', (req, res, next) => {
    res.sendFile('views/galery.html', { root: __dirname });
});// Ruta Profile

// -- 404 and error handler
// Si no entramos en ninguna ruta entramos en este Middleware 
// el 404 Not Found
app.use((req, res, next) => {
  res.status(404);
  res.send('not-found');
});
// Si en algun punto existe un error o llamamos a next(error) y esta función se ejecuta
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only send if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.send('error');
  }
});

// El servidor escucha al puerto 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))