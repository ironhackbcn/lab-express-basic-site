const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/',(request, response, next) => {
  response.sendfile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
  response.sendfile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
  response.sendfile(__dirname + '/views/gallery.html');
});

app.get('/*', (request, response, next) => {
  response.sendfile(__dirname + '/views/404.html');
});

app.listen(3500, () => {
  console.log('Server Active on port 3500')
});