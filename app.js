'use strict'

const express = require('express')
const port = 3000
const app = express()

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html')
})

app.get('/modelX', (req, res, next) => {
  res.sendFile(__dirname + '/views/modelX.html')
})

app.get('/modelY', (req, res, next) => {
  res.sendFile(__dirname + '/views/modelY.html')
})

app.get('/modelS', (req, res, next) => {
  res.sendFile(__dirname + '/views/modelS.html')
})

app.get('/model3', (req, res, next) => {
  res.sendFile(__dirname + '/views/model3.html')
})

app.get('/*', (req, res, next) => {
  res.sendFile(__dirname + '/views/not-found.html')
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
