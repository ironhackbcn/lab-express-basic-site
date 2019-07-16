'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.use(express.static('public'));


// aquí solo declara las funciones

app.get('/', (req, res, next) => {
    //siempre en orden primero req luego response luego el next
    res.sendFile(__dirname + '/public/views/home.html')
})

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/about.html')
})

app.get('/galeria', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/galeria.html')
})

app.get('/*', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/not-found.html')
})


// con el listen activa el servidor
app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})