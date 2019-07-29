const express = require("express");
const app = express();

app.use(express.static("public"));

//Home
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

//About
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

//Photo
app.get("/photo", (request, response, next) => {
  response.sendFile(__dirname + "/views/photo.html");
});

//Server started
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
