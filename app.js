const express = require('express'); //requirimos express

const app = express(); //habilitamos express dentro de app

app.use(express.static('public'));

app.get('/', (request, response, next) =>{
    response.sendFile(__dirname + '/views/home.html');
})

app.get('/about', (request, response, next) =>{
    console.log(request);
    response.sendFile(__dirname + '/views/about.html');
})

app.get('/gallery', (request, response, next) =>{
    console.log(request);
    response.sendFile(__dirname + '/views/gallery.html');
})

app.get('/*', (request, response, next) =>{
    console.log(request);
    response.sendFile(__dirname + '/views/notfound.html');
})



//initiar el servidor / configuramos la ruta
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

