'use strict'
const express = require('express');
const port = 3000;
const app = express();
app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/home.html')
})
app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/about.html')
})
app.get('/foto', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/foto.html')
})
app.get('/*', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/not_found.html')
})


app.listen(port, ()=>{
  console.log(`Server running at port ${port}`)
});

