'use strict';

const express = require('express');
const app = express();
const port = 3000;

//hacemos que lo que está en la carpeta public esté disponible
app.use(express.static('public'));

//rutas
app.get('/', (request, response, next) => {
  console.log('home');
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
  console.log('about');
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
  console.log('gallery');
  response.sendFile(__dirname + '/views/gallery.html');
});

// -- 404 and error handler

//si no encuentra la página viene aquí
app.use((req, res, next) => {  
  res.status(404);              
  res.sendFile(__dirname + '/views/404.html');
});

// Si en algun punto existe un error o llamamos a next(error) y esta función se ejecuta
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.send('error');
  }
});


//creamos el listen 
app.listen(port, () => {
  console.log('mi primera página con Express');
});