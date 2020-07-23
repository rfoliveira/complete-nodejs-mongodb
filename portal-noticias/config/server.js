const http = require('http');
const express = require('express');
// const modulo_teste = require('./module_teste');
const consign = require('consign');

// Para que já execute a função e importe em um único comando
// const express = require('express')();
const app = express();

// Definindo o ejs como motor de view
app.set('view engine', 'ejs');

// Define o diretório padrão de views
// Esse caminho considera o caminho a partir da pasta app
app.set('views', './app/views');

// Inclusão do diretório routes para o consign
// O método "into", reconhece as rotas da aplicação e joga elas dentro de app
consign()
    .include('app/routes')
    // Incluindo o config no load dos módulos. Obs.: o consign executa de cara o módulo
    // Nesse caso, preciso passar a extensão para que entenda que é o módulo e não um caminho.
    // A cada requisição ao servidor será criado uma conexão com o servidor.
    .then('config/dbConnection.js')
    // Incluindo as models
    .then('app/models')
    .into(app);

module.exports = app;