"use strict";

const express = require("express"); // cargar el modulo
const app = express(); // ejecutar express
const port = 3000; //definimos el puerto

//Middleware, tuberias extra que se ejecutan con cada request
app.use(express.static(__dirname + "/public"));
//Middleware
app.use((req, res, next) => {
  console.log(req.path);
  next();
});

//Routes
app.get("/", (req, res, next) => {
  res.sendfile(__dirname+"/views/"+"index.html");
}); // Ruta home
app.get("/gallery", (req, res, next) => {
  res.sendfile(__dirname+"/views/"+"gallery.html");
}); //ruta profile
app.get("/about", (req, res, next) => {
  res.sendfile(__dirname+"/views/"+"about.html");
}); //ruta about

// -- routes
// -- 404 and error handler

// NOTE: requires a views/not-found.ejs template
app.use((req, res, next) => {
  res.status(404);
  res.sendfile(__dirname+"/views/"+"notfound.html");
});

// Si en algun punto existe un error
app.use((err, req, res, next) => {
  // always log the error
  console.error("ERROR", req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.send("error");
  }
});

//El servidor escucha
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
