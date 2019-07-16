'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res, text) => {
    res.sendFile(__dirname + '/public/views/home.html');
});

app.get('/models', (req, res, text) => {
    res.sendFile(__dirname + '/public/views/models.html');
});

app.get('/gallery', (req, res, text) => {
    res.sendFile(__dirname + '/public/views/gallery.html');
});

app.get('/*', (req, res, text) => {
    res.sendFile(__dirname + '/public/views/not-found.html');
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
});