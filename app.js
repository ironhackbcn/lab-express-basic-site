'use strict'

const express = require('express');

const port = 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req,res,next) => {
  res.sendFile(__dirname + '/public/views/home.html')
})


app.get('/about', (req,res,next) => {
  res.sendFile(__dirname + '/public/views/about.html')
})

app.get('/gallery', (req,res,next) => {
  res.sendFile(__dirname + '/public/views/gallery.html')
})

app.get('/*', (req,res,next) => {
  res.sendFile(__dirname + '/public/views/not-found.html')
})

app.listen(port,() => {
  console.log(`Server running at port ${port}`)
})