const express = require('express');
const app = express();


app.use(express.static('public'));


app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html')
})

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

