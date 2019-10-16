const express = require('express');

const app = express();

/*le voy a decir que use como ruta de archivos de usuos estaticos la carpeta public. Lo hago más tarde*/
app.use(express.static('public'));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.html')
})
/*sendFile nos permite responder al request con el contenido del archivo*/

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html')
})
/*linkeo las bios de los personajes*/
app.get('/saturngirl', (request, response, next) => {
    response.sendFile(__dirname + '/views/saturngirl.html')
})

app.get('/lightinglad', (request, response, next) => {
    response.sendFile(__dirname + '/views/lightinglad.html')
})

app.get('/cosmicboy', (request, response, next) => {
    response.sendFile(__dirname + '/views/cosmicboy.html')
})

app.get('/*', (request, response, next) => {
    response.sendFile(__dirname + '/views/notfound.html')
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});


/*
app.get('/', (request, response, next) => {
    /*request, response y next son 3 variables, cualquier ruta siepre av a tener esas 3 variables
    console.log(request);
    response.send('<h1>Welcome to my home page!<h1>')

})

/*en 16 lineas monto un servidor y doy una respuesta a la ruta*/
/*Instalamos node mon para que cada cambio que hagamos en nuestrso archivos no tengamos que abrir y cerrar el servidor*/