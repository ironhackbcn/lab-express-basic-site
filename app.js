// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

//start server
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});

// app.get("/", (request, response, next) => {
//   console.log(request);
//   response.send("<h1>Parque natural del Montseny </h1>");
// });

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/montseny", (request, response, next) => {
  response.sendFile(__dirname + "/views/about-page.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/photo-gallery.html");
});

app.get("/not-found", (request, response, next) => {
  response.sendFile(__dirname + "/views/404.html");
});
