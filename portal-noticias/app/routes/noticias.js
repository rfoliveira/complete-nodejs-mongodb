// const dbConnection = require('../../config/dbConnection');

// Colocando a conexão no carregamento do consign
// não precisarei mais disso aqui...

// require('../../config/dbConnection');
/*
module.exports = function(app) {

    var connection = dbConnection();

    app.get('/noticias', (req, res) => {
        // var mysql = require('mysql');
        // var connection = mysql.createConnection({
        //     host: 'localhost',
        //     user: 'root',
        //     password: 'masterdba',
        //     database: 'portal_noticias'
        // });

        connection.query('select * from noticias', (err, result) => {
            // res.send(result);
            // Com ejs...
            res.render('noticias/noticias', { noticias: result });
        });

        // res.render('noticias/noticia');
    });
}
*/

module.exports = function(app) {

    app.get('/noticias', (req, res) => {
        
        // Assim a conexão só será usada quando entrar na requisição
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias((err, result) => {
            res.render('noticias/noticias', { noticias: result });
         });

        // connection.query('select * from noticias', (err, result) => {
        //    res.render('noticias/noticias', { noticias: result });
        // });
    });
}