const express = require('express');

const path = require('path');

const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/about', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('/portfolio', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/portfolio.html'));
});

app.get('/contact', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/contact.html'));
});

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/404-page.html'));
});

app.listen(port, () => {});
