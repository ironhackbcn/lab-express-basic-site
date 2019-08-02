const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});
app.get("/portfolio", (request, response, next) => {
  response.sendFile(__dirname + "/views/portfolio.html");
});
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
app.use(function(req, res) {
  res.send("404: Page not Found", 404);
});
