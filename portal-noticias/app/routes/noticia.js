module.exports = function(app) {

    app.get('/noticia', (req, res) => {
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia((err, result) => {
            res.render('noticias/noticia', { noticia: result });
        });

        // connection.query('select * from noticias where id_noticia = ', (err, result) => {
        //     res.render('noticias/noticia', { noticia: result });
        // });
    });
}