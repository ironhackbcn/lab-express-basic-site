const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("public"));

//Home
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

//About
app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

//Photo
app.get("/photo", (request, response) => {
  response.sendFile(__dirname + "/views/photo.html");
});

//404
app.get("*", (request, response) => {
  response.status(404).sendFile(__dirname + "/views/404.html");
});

//Server started
app.listen(port, () => {
  console.log(`My app is listening on port ${port}!`);
});
