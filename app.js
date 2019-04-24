const express = require('express');
const app = express();

// Middleware for static files
app.use(express.static('puplic'));

//Home route
app.get('/', (request, response, next)=>{
  response.sendFile(__dirname + '/puplic/index.html');
});

//About route
app.get('/about', (request, response, next)=>{
  response.sendFile(__dirname + '/puplic/about.html')
})

// Gallery route
app.get('/gallery', (request, response, next)=>{
  response.sendFile(__dirname + '/puplic/gallery.html')
})

app.get('/*', (request, response, next)=>{
  response.sendStatus(404);
})

app.listen(3005, ()=>{
  console.log('My app is running');
  
})