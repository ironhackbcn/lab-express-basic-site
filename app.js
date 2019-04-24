const express = require('express');
const app = express();

app.listen(3002, ()=>{
  console.log('EXPRESSSSSSSSSSSSS')
})

app.use(express.static('public'));
app.get('/', (request, response, next)=>{
  response.sendFile(__dirname + '/public/views/index.html')
})

app.get('/about', (request, response, next)=>{
   response.sendFile(__dirname + '/public/views/about.html')
})

app.get('/images', (request, response, next)=>{
  response.sendFile(__dirname + '/public/views/images.html')
})

app.get('/*', (request, response, next)=>{
  response.status(418);
  response.send(`
  <body>
   <h1>418 - I\'m a little teapot :-))</h1>
   <style>
    body {
      background-color: #CEFF1A;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      height: 100vh;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    </style>
    </body>`)
})



