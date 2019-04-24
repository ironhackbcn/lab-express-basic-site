const express = require("express");
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next)=>{
  response.sendFile(__dirname + '/public/views/home.html');
});

app.get('/about', (request, response, next)=>{
  response.sendFile(__dirname + '/public/views/about.html');
});

app.get('/gallery', (request, response, next)=>{
  response.sendFile(__dirname + '/public/views/gallery.html');
});

app.get('/*', (request, response, next)=>{
  response.sendFile(__dirname + '<h1>error 404, page not found4</h1>');
});

app.listen(3000);


//where do you put the codes for the other pages, like 202