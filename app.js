'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.use(express.static('public'));

app.get('/',(req, res, next)=> {
    res.sendFile(__dirname +'/public/views/homePage.html')
})

app.get('/about',(req, res, next)=> {
    res.sendFile(__dirname +'/public/views/aboutPage.html')
})
app.get('/*',(req, res, next)=> {
    res.sendFile(__dirname +'/public/views/notFound.html')
})
app.listen(port, ()=>{
    console.log (`Server running at port ${port}`);
})

