// Require Express
const express = require('express');

const path = require('path');

// Express server handling requests and responses
const app = express();

app.use(express.static('public'));
app.set('views',__dirname+'/views');

app.get("/", (req, res) => 
    res.sendFile(path.join(__dirname, "/views/index.html"))
);

app.get("/contact", (req, res) => 
    res.sendFile(path.join(__dirname, "/views/contact.html"))
);

app.get("/about", (req, res) => 
    res.sendFile(path.join(__dirname, "/views/about.html"))
);

app.get("/photo_gallery", (req, res) => 
    res.sendFile(path.join(__dirname, "/views/photo_gallery.html"))
);

app.get("/rrss", (req, res) => 
    res.sendFile(path.join(__dirname, "/views/rrss.html"))
);

// Server Started
app.listen(3001);