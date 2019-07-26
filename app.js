const express = require('express');

const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/', (request, response, next) => {
  console.log(request);
  response.send('<h1>Welcome Ironhacker111. :)</h1>');
});

app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
