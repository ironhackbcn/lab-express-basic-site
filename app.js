const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//Make eveything inside of public/avaliable
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/projects.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/views/error404.html"));
});

//Start the server
app.listen(3000, () => {
  console.log(`My first app listening on port ${port}!`);
});
