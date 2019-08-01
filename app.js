// Requiere Express
const express = require("express");

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// our first Route:
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

// About route:
app.get("/about", (request, response, next) => {
  response.sendFile((__dirname = "/views/about.html")); // en este punto de static files que es lo q debe pasar a parte de los styles...
});

// Blog route:
app.get("/blog", (request, response, next) => {
  response.sendFile((__dirname = "/views/blog.html")); // en este punto de static files que es lo q debe pasar a parte de los styles...
});

// Project route:
app.get("/about", (request, response, next) => {
  response.sendFile((__dirname = "/views/project.html")); // en este punto de static files que es lo q debe pasar a parte de los styles...
});

// Server Started
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
