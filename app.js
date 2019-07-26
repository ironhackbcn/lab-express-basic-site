const express = require('express');

const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/index.html'));
});
app.get('/porfolio', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/porfolio.html'));
});
app.get('/about', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/about.html'));
});

app.listen(3000, () => {});
