const express = require("express");
const app = express();
const port = 3010;


app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
  res.render("home");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.get("/about", (req, res) => {
  res.render("about");
});





// si no entra en ninguna de las otras rutas, entra por defecto aca ya que no encontro nada
app.use((req, res, next) => {
  res.status(404);
  res.send('not-found');
});


// NOTE: requires a views/error.ejs template
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.send('error');
  }
});

app.listen(port, () => console.log(`example app from ${port}`));