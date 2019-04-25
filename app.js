const express = require('express')

const app = express()

app.listen(3000, () => {
  console.log(`Server is running :)`);
})

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.redirect('index.html')
})

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html' )
})

app.get('/about.html', (req, res) => {
  res.sendFile(__dirname + '/public/views/about.html' )
})

app.get('/gallery.html', (req, res) => {
  res.sendFile(__dirname + '/public/views/gallery.html')
})


app.get('/*', (req, res) => {
  res.statusCode = 404
  res.sendFile(__dirname + '/public/views/not-found.html')
})