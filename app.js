'use strict'

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

//Ruta home
app.get('/', (req, res, next) => {
   res.sendFile(__dirname + '/views/index.html');
});

//Ruta about
app.get('/about', (req, res, next) => {
   res.sendFile(__dirname + '/views/about.html');
});

//Ruta gallery
app.get('/gallery', (req, res, next) => {
   res.sendFile(__dirname + '/views/gallery.html');
});

//Ruta not found
app.use((req, res, next) => {
   res.status(404);
   res.sendFile(__dirname + '/views/404.html');
});

app.listen(3000, () => {
   console.log(`Example app listening on ${port}!`);
});





