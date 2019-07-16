'use strict';

const express = require('express');
const port = 3000;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html');
});

app.get('/*', (req, res, next) => {
  res.sendFile(__dirname + '/views/404.html');
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
