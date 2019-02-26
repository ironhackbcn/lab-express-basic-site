'use strict';

const express = require('express')// cargar el modulo
const app = express()//ejecutar express
const port = 3000 //definir el puerto

app.use(express.static(__dirname + '/public'));

//Routes
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html')
}); // Ruta Home

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html')
}); // Ruta Home

app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html')
}); // Ruta gallery


// -- 404 and error handler
// Si no entramos en ninguna ruta entramos en este Middleware 
// el 404 Not Found
app.use((req, res, next) => {
  res.status(404);
  res.sendFile(__dirname + '/views/error404.html');
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