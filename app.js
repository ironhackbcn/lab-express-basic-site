'use strict';

const express = require ('express');
const port = 3000;

const app = express();

app.get('/', (req, res, text) => {
    res.sendFile(__dirname + '/public/views/home.html');
});

app.get('/projects', (req, res, text) => {
    res.sendFile(__dirname + '/public/views/projects.html');
});
app.get('/theteam', (req, res, text) => {
    res.sendFile(__dirname + '/public/views/the-team.html');
});
app.get('/*', (req, res, text) => {
    res.sendFile(__dirname + '/public/views/not-found.html');
});


app.listen(port, () => {
    console.log(`Server running at port ${port}`)
});