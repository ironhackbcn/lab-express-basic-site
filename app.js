const express = require('express');

const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
// app.get("/", (request, response, next) => {
//   //   console.log(request);
//   response.send("<h1>Welcome Ironhacker2. :)</h1>");
// });

// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

// our second Route:
app.get('/portfolio', (request, response, next) => {
  response.sendFile(`${__dirname}/views/portfolio.html`);
});

// our NOT FOUND Route:
app.get('/*', (request, response, next) => {
  response.sendFile(`${__dirname}/views/not-found.html`);
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
