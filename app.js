'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.use(express.static('public')); // connect the files in the PUBLIC folder to be used by APP

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/home.html');
});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/about.html');
});

app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/gallery.html');
});

app.get('/*', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/not-found.html');
});

// ACTIVATE THE SERVER!

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})






