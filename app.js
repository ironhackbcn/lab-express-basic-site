const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/about.html');
});

app.get('/photos', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/photos.html');
});

app.get('/*', (req, res, next) => {
  res.send('404');
})
app.listen(3000, () => console.log('The server is listening!'));