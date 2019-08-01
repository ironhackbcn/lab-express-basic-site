const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "/views/index.html"))
);
app.get("/about", (req, res, next) =>
  res.sendFile(path.join(__dirname, "/views/about.html"))
);
app.get("/portfolio", (req, res, next) =>
  res.sendFile(path.join(__dirname, "/views/portfolio.html"))
);
app.get("/404", (req, res, next) =>
  res.sendFile(path.join(__dirname, "/views/404.html"))
);

app.listen(port, () => console.log(`Server running at port ${port}`));
