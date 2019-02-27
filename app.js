'use strict';

const express = require('express')
const app = express()
const port = 3003 


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.sendFile( __dirname + "/views/" + "home.html" );
}); 

app.get('/about', (req, res, next) => {
  res.sendFile( __dirname + "/views/" + "about.html" );
});

app.get('/photogallery', (req, res, next) => {
  res.sendFile( __dirname + "/views/" + "photogallery.html" );
});

app.get('/notfound', (req, res, next) => {
  res.sendFile( __dirname + "/views/" + "notfound.html" );
});


app.use((req, res, next) => {
  res.status(404);
  res.send('not-found');
});

app.use((err, req, res, next) => {

  console.error('ERROR', req.method, req.path, err);


  if (!res.headersSent) {
    res.status(500);
    res.send('error');
  }
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))