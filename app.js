"use strict";

const express = require("express");
const app = express();
const port = 3000;

//Middleware statics
app.use(express.static(__dirname + "/public/"));
app.use(express.static(__dirname + "/node_modules/bulma/css"));

//Routes
app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/trips", (req, res, next) => {
  res.sendFile(__dirname + "/views/trips.html");
});

// Si no entramos en ninguna ruta entramos en este Middleware 404 Not Found
app.use((req, res, next) => {
  res.status(404);
  res.send("not-found");
});

// Esta función se ejecuta si en algun punto existe un error o llamamos a next(error)
app.use((err, req, res, next) => {
  // always log the error
  console.error("ERROR", req.method, req.path, err);

  // only send if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.send("error");
  }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
