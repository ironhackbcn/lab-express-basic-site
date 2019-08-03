/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/portfolio.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/contact.html'));
});

app.get('/404', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/views/404.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(port);
