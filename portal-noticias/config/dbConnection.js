var mysql = require('mysql');

// Dessa forma não é iniciado uma conexão ao carregar a aplicação,
// mas sim só quando carrega os módulos da aplicação.
var connMySQL = function() {
    console.log('Conexão com o banco de dados foi estabelecida.');

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'masterdba',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    return connMySQL;
}