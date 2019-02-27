'use strict';

const express = require('express');

const app = express();

const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {

  res.sendFile(__dirname + '/views/' + '/index.html')

});

app.get('/about', (req, res, next) => {

  res.sendFile(__dirname + '/views/' + '/about.html')

});

app.get('/gallery', (req, res, next) => {

  res.sendFile(__dirname + '/views/' + '/gallery.html')

});

app.use((req, res, next) => {

  res.status(404);

  res.send('not-found');

});

app.listen(port,()=>{
  console.log('Hola')
});