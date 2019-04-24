const express = require('express');
const app = express();
const PORT = 3000;

//Middlware for static files
app.use(express.static('public'));


// First route
app.get('/index.html', (request, response, next) =>{
response.sendFile(__dirname + '/public/view/index.html');
});

//about
app.get('/about.html', (request,response,next) =>{
response.sendFile(__dirname + '/public/view/about.html');
});

app.get('/gallery.html', (request,response,next) =>{
response.sendFile(__dirname + '/public/view/gallery.html');
});

app.get('/*', (request,response,next) =>{
  response.sendFile(__dirname + '/public/view/404.html');
  });


  app.listen(PORT, ()=>{
    console.log("howdy...");
  });