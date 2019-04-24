const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

// MIDDLEWARE
// Middleware for static files
app.use(express.static('public'));

// ROUTES
// GET `/` route
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/index.html');
});

// GET `/index` route
app.get('/index', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/index.html');
});

// GET `/about` route
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/about.html');
});

// GET `/photos` route
app.get('/photos', (request, response, next) => {
  //response.sendFile(__dirname + '/public/views/photos.html');
  //response.send(`<h1>Photos</h1>`)

  let photoGallery;
  photoGallery = `
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Travel Page</title>
  <link rel="stylesheet" href="../css/main.css">
  </head>
  <body>
    <header id="header-section">
      <nav>
        <ul class="menu">
          <li><a href="index">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="photos">Photos</a></li>
        </ul>
      </nav>
    </header>
    <section id="main-section">
    <div id="main">`

  const src = './public/img/'

  //looping over images in folder, need to improve!
  fs.readdir(src, (err, files) => {
    if (err) {
      console.error("Could not list the directory.", err);
    }

    files.forEach((file) => {
      //console.log(file)
      photoGallery = photoGallery + `<img src="img/${file}" class="travel-photo">`
    });

    photoGallery = photoGallery + `</div ></section ></body ></html > `

    response.send(photoGallery)

  });



});

// 404 route
app.get('/*', (request, response, next) => {
  response.status(404);
  response.send(`
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Travel Page</title>
  <link rel="stylesheet" href="../css/main.css">
  </head>
  <body>
    <header id="header-section">
      <nav>
        <ul class="menu">
          <li><a href="index">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="photos">Photos</a></li>
        </ul>
      </nav>
    </header>
    <section id="main-section">
    <div id="main">
    <h1>404 - Page Not Found :(</h1>
      </div ></section ></body ></html > 
    `);
});


// START THE SERVER
app.listen(3008, () => {
  console.log('My express up is running :) ');
});
