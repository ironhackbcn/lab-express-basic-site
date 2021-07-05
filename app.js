const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (req, res, next) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});

app.use((err, req, res, next) => {
  console.error("ERROR", req.method, req.path, err);

  if (!res.headersSent) {
    res.status(500);
    res.send("error");
  }
});
