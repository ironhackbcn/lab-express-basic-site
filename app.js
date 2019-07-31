const express = require('express');

const app = express();
const path = require('path');
const port = 3000;

app.use = express.static('public');

app.get('/index', (request, response, next) => {
  response.sendFile(__dirname+ '/views/index.html');
  console.log (__dirname)
});

// app.get('/about', (request, response, next) => {
//   response.sendFile(__dirname + '/views/about-page.html');
//   console.log(__dirname);
// });

// app.get('/gallery', (request, response, next) => {
//   response.sendFile(__dirname + '/views/photogallery-page.html');
//   console.log(__dirname);
// });

// app.get('/*', (request, response, next) => {
//   response.sendFile(__dirname + '/views/404-page.html');
//   console.log(__dirname);
// });

app.listen(port, () => {
  console.log('Server listening at port 3000');
});
