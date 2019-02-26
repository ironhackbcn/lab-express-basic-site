const express = require('express');
const app = express();
const port = 3000;


app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res) => {
  res.sendFile(__dirname +'/views/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname +'/views/about.html');
});

app.get('/photo-gallery', (req, res) => {
  res.sendFile(__dirname +'/views/photo-gallery.html');
});


// -- 404 and error handler

// NOTE: requires a views/not-found.ejs template
app.use((req, res, next) => {
  res.status(404);
  res.sendFile(__dirname + '/views/error.html');
});

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});
