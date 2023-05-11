const express = require("express");
const app = express();

//Dizendo para o express usar o ejs como view engine
app.set("view engine", "ejs");
app.use(express.static("public"));

//Definindo as rotas
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/instrucoes", (req, res) => {
  res.render("instrucoes");
});

app.get("/app", (req, res) => {
  res.render("index");
});

//Definindo a porta do App
app.listen(8081, () => {
  console.log("App rodando!");
});
