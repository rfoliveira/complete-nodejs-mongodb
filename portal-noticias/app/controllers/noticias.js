module.exports.noticias = function(application, req, res) {
    // Assim a conexão só será usada quando entrar na requisição
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias((err, result) => {
        res.render('noticias/noticias', { noticias: result });
    });
}

module.exports.noticia = function(application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia((err, result) => {
        res.render('noticias/noticia', { noticia: result });
    });
}