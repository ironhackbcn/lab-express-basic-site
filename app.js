const express = require ("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next) =>{
    response.sendFile(__dirname + "/views/home.html")
})

app.get("/about", (request, response, next) =>{
    response.sendFile(__dirname + "/views/about.html")
})

app.get("/cities", (request, response, next) =>{
    response.sendFile(__dirname + "/views/cities.html")
})

app.get("/*", (request, response, next) =>{
    response.sendFile(__dirname + "/views/not-found.html")
})

app.listen(3000)