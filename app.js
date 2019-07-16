'use strict'

const express = require('express');

const port = 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (red, res, next) => {
  res.sendFile(__dirname + '/public/views/home.html')
});

app.get('/about', (red, res, next) => {
  res.sendFile(__dirname + '/public/views/about.html')
});

app.get('/photo', (red , res, next) => {
  res.sendFile(__dirname + '/public/views/photo.html')
})

app.get('/*' , (red, res, next) => {
  res.sendFile(__dirname + '/public/views/not-found.html')
})

app.listen(port, () => {
  console.log(`All good pal, Server running at port ${port}`)
});