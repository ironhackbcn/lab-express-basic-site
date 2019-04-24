const express = require ('express');
const app = express();

app.use(express.static('public'));

//home page
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/public/view/index.html');
})

//about page
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/public/view/about.html');
})

//images page
app.get('/images', (request, response, next) => {
    response.sendFile(__dirname + '/public/view/images.html');
})
//not found page
app.get('/*',(request,response,next)=> {
    response.status(404);
    response.send(`
    <body>
    <h3> NOT FOUND :( </h3>
    <style>
      body {
      background-color: white;
      width: 100%
      height: 100vh;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      }
      h3 {
      margin: 0 auto;
      font-size: 80px;
      font-family: 'Anton', sans-serif;
      color: black;
      }
    </style>
    </body>`)
})

app.listen(3000,()=>{
    console.log('HOLAAAAAAAAAA');
})