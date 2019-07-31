const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) =>
  response.sendFile(path.join(__dirname, "/view/index.html"))
);

app.get("/projects", (request, response) =>
  response.sendFile(path.join(__dirname, "/view/projects.html"))
);

app.get("/about", (request, response) =>
  response.sendFile(path.join(__dirname, "/view/about.html"))
);

app.get("/404", (request, response) =>
  response.sendFile(path.join(__dirname, "/view/404.html"))
);

app.listen(3000, () => {});
