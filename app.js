const express = require('express');

const app = express();


// Middleware for static files
app.use(express.static('public'));

// Our first route
app.get('/', (request, response, next)=> {
  response.sendFile(__dirname + '/public/views/home.html');
});

// Our second route
app.get('/about', (request, response, next)=> {
  response.send('<h1>About me - page</h1>')
});


app.get('/gallery', (request, response, next)=> {
  response.sendFile(__dirname + '/public/views/gallery.html');
});

// Our 404 route
app.get('/*', (request, response, next)=> {
  response.status(404);
  response.sendFile(__dirname + '/public/views/404.html');
});

app.listen(3007, () => {
  console.log('lab express basic site');
});
