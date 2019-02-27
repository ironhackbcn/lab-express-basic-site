'use strict';

const express = require('express');
const app = express(); //ejecutar express
const port = 3000; //definir el puerto

// -- Middleware, tuberias extra que se ejecutan con cada request

app.use(express.static(__dirname + '/public')); //set public folder

// // -- Otro middleware
// app.use((req, res, next) => {
//   console.log(__dirname); //
//   next();
// });

// -- Routes

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html');
}); //Ruta home

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
}); //Ruta about

app.get('/photo-gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/photo-gallery.html');
}); //Ruta profile

// -- 404 and error handler
// SI no entramos en ninguna ruta, entramos en este middleware
// NOTE: requires a views/not-found.ejs template
app.use((req, res, next) => {
  res.status(404);
  res.send('not-found');
});

// NOTE: requires a views/error.ejs template
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.send('error');
  }
});

//El servidor escucha
app.listen(port, () => console.log(`Example app listening on port ${port}!`));