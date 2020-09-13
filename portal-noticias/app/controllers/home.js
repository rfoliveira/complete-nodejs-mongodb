module.exports.index = function (application, req, res) {
    
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    // A função query precisa de 2 parâmetros: error e result...
    noticiasModel.get5UltimasNoticias((err, result) => {
        //console.log(result);
        res.render('home/index', { noticias: result });
    });
}