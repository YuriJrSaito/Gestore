"use strict";

//importar o módulo do express
var express = require('express');
//importar o cors para que esta API seja acessível pela aplicação react
var cors = require('cors');
//importar as rotas
var routes = require('./routes');

//para começar a colocar o servidor no ar
var app = express();
app.use(cors()); //assim libera o acesso externo para todo tipo de aplicação
app.use(express.json());
app.use(routes);

//app.use(express.static(__dirname + '/public'))

//como podemos ter várias aplicações rodando, escolhemos uma porta para
//essa aplicação
app.listen(3344, function () {
  console.log("Servidor aberto em 3344");
});
module.exports = app;