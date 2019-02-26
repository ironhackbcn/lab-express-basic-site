'use strict'

const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/about', (req, res) => {
    res.send('About')
});

app.get('/photo-gallery-page', (req, res) => {
    res.send('photo-gallery-page')
});

app.use((req, res, next) => {
    res.status(404);
    res.sendfFile('/views/');
  });


  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
