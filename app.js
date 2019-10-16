const express = require('express');

const app = express();

app.use(express.static('public'));

//home
app.get('/', (request,response,next)=> {
    response.sendFile(__dirname + '/views/home.html')
})

//about
app.get('/about', (request,response,next)=> {
    response.sendFile(__dirname + '/views/about.html')
})

//gallery
app.get('/gallery', (request,response,next)=> {
    response.sendFile(__dirname + '/views/gallery.html')
})

//404!! 

app.get('/*', (request,response,next)=> {
    response.sendFile(__dirname + '/views/404.html')
})

app.listen(3000, ()=>{
    console.log('App listening on port 3000!');
})