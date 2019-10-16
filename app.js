const express = require('express');

const app = express();
// que use como storage de archivos estaticos la carpeta public
app.use(express.static('public'))

app.get('/', (requets, response, next)=>{
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});
app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
});
app.get('/error', (request, response, next) => {
    response.sendFile(__dirname + '/views/notFoundpage.html');
});


app.listen(3000, () => {
    console.log('App listening on port 3000');
})