'use strict';

const express = require('express');
const port = 3000;
const app = express();

app.use(express.static('public'))

// app.get('/styles/style.css', (req, res) => res.sendFile(path.join(__dirname + '/public/styles/style.css')));

app.get('/', (req, res, next) => res.sendFile(__dirname + '/public/views/home.html'));

app.get('/about', (req, res, next) => res.sendFile(__dirname + '/public/views/about.html'));

app.get('/gallery', (req, res, next) => res.sendFile(__dirname + '/public/views/gallery.html'));

app.get('/*', (req, res, next) => res.sendFile(__dirname + '/public/views/not-found.html'));

// app.get('/js/gallery.js', (req, res) => res.sendFile(path.join(__dirname + '/public/js/gallery.js')));

// app.get('/js/client.js', (req, res) => res.sendFile(path.join(__dirname + '/public/js/client.js')));

app.listen(port, () => console.log(`Listening on port ${port}`));
