const express = require('express');
const app = express();

app.use(express.static('public'));

//INDEX.HTML
app.get('/home', ( request, response, next) => {
  response.status(200);
  response.sendFile(__dirname + '/public/views/index.html');
});

//ABOUT.HTML
app.get('/aboutme', (request, response, next) => {
  response.status(200);
  response.sendFile(__dirname + '/public/views/about.html');
});

//PHOTOS.HTML
app.get('/photos', (request, response, next) => {
  response.status(200);
  response.sendFile(__dirname + '/public/views/photos.html');
});

//404
app.get('/*', (request, response, next)=>{
  response.status(404);
  response.send('<h1>404 - Page Not Found</h1>');
});

//START SERVER
app.listen(3002, () => {
  console.log('lab express server is running');
});