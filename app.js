const express = require('express');

const app = express();


// Middleware for static files
app.use(express.static('public'));

// Our first route
app.get('/home', (request, response, next)=> {
  response.sendFile(__dirname + '/public/views/home.html');
});

// Our secon route
app.get('/about', (request, response, next)=> {
  response.sendFile(__dirname + '/public/views/about.html');
});


app.get('/*', (request, response, next)=> {
  response.status(404);
  response.sendFile(__dirname + '/public/views/notFound.html'); //can i link a notFound.html???
});


app.listen(3000, () => {
  console.log('My first express up is running :) ');
});