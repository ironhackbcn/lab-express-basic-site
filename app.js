"use strict";

const express = require("express");
const app = express();
const port = 3000;

const fs = require("fs");

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
});


app.get("/gallery", (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html');
});


app.use((req, res, next) => {
  res.status(404);
  res.sendFile(__dirname + '/views/error.html');
});


app.use((err, req, res, next) => {
  console.error("ERROR", req.method, req.path, err);
  if (!res.headersSent) {
    res.status(500);
    res.send("Server error");
  }
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));