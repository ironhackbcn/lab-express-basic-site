const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/',(request, response, next) => {
  response.sendfile(__dirname + '/views/home-page.html');
});

app.get('/cat', (request, response, next) => {
  response.sendfile(__dirname + '/views/cat-page.html');
});

app.listen(3000, () => {
  console.log('Server Active on port 3000')
});