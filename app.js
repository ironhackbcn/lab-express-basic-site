"use strict";

const express = require("express");
const app = express();
const port = 3000;

//public mapped
app.use(express.static(__dirname + `/public`));

//routing
app.get("/", (req, res) => res.sendFile(__dirname + `/views/index.html`));
app.get("/about", (req, res) => res.sendFile(__dirname + `/views/about.html`));
app.get("/photo", (req, res) => res.sendFile(__dirname + `/views/photo.html`));

//404 MIDDLEWARE
app.use((req, res, next) => {
    res.status(404);
    res.sendFile(__dirname + `/views/error404.html`);
});

//Error middleware
app.use((err, req, res, next) => {
    res.status(404);
    res.send('not-found');
});

app.listen(port, () => console.log(`Listening ${port}`));
