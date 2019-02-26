"use strict";

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + `/public`));

app.get("/", (req, res) => res.sendFile(__dirname + `/views/index.html`));
app.get("/about", (req, res) => res.sendFile(__dirname + `/views/about.html`));
app.get("/photo", (req, res) => res.sendFile(__dirname + `/views/photo.html`));

app.use((req, res, next) => {
    res.status(404);
    // console.log(__dirname + `/views/error404.html`)
    res.sendFile(__dirname + `/views/error404.html`);
    // res.sendFile(__dirname + `/views/error404.html`)
});

// //404 middleware
// app.use((req, res, next) => {
//     res.status(404);
//     res.send('not-found');
// });

app.listen(port, () => console.log(`Listening ${port}`));
