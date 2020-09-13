const http = require('http');
const express = require('express');
// const modulo_teste = require('./module_teste');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Para que já execute a função e importe em um único comando
// const express = require('express')();
const app = express();
app.use(express.json());

// Definindo o ejs como motor de view
app.set('view engine', 'ejs');

// Define o diretório padrão de views
// Esse caminho considera o caminho a partir da pasta app
app.set('views', './app/views');

// Middleware do express para identificar um diretório 
// com informações estáticas
// Dessa forma, ele considera todos os arquivos desse mapeamento
// como estáticos
// O links desses arquivos serão considerados a partir 
// dessa pasta de mapeamento, sem a necessidade de se especificar outro caminho
app.use(express.static('./app/public'));

// Configurando o bodyParser
// Como ele é um middleware, precisa definir antes das rotas e tal
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

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
    // Inclusão dos controllers
    .then('app/controllers')
    .into(app);

module.exports = app;