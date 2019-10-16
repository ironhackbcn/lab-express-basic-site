const express = require('express')

const app = express()

app.use(express.static('public'))


app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html')
});


app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
});


app.get('/galery', (request, response, next) => {
    response.sendFile(__dirname + '/views/galery.html')
});


app.get('/*', (request, response, next) => {
    response.sendFile(__dirname + '/views/notfoundpage.html')
});

app.listen(3000, () => {
    console.log('App listening on port 3000')
});