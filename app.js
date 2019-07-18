'use strict';

const express = require('express')
const port = 3000
const app = express()

app.use(express.static('public'))

app.get('/', (req, res, next) => res.sendFile(__dirname + '/public/views/home.html'))
app.get('/about', (req, res, next) => res.sendFile(__dirname + '/public/views/about.html'))
app.get('/pics', (req, res, next) => res.sendFile(__dirname + '/public/views/photos.html'))
app.get('/*', (req, res, next) => res.sendFile(__dirname + '/public/views/404.html'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))