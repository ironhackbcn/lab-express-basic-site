const express = require ('express');

const app = express();

// Middleware
app.use(express.static('public'));

// HOME ROUTE
app.get ('/', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/index.html');
});

// ABOUT ROUTE
app.get ('/about', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/about.html');
});

// GALLERY ROUTE
app.get ('/gallery', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/gallery.html');
});

// 404 PAGE NOT FOUND
app.get ('/*', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/404.html');
});

app.listen(3010, () => {
    console.log('Express server is running');
});