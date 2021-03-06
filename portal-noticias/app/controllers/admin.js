// Dessa forma, exporto apenas um "atributo"
module.exports.formulario_inclusao_noticia = function(application, req, res) {
    res.render('admin/form_add_noticia', { validacao: {}, noticia: {}});
}

module.exports.noticias_salvar = function(application, req, res) {
    var noticia = req.body;
        // res.send('Chegou na página');
        // res.send(noticia);

        // Validações da "view" usando o express-validator
        // Isso na versão 3.2.0 do express-validator...
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'Noticia é obrigatório').notEmpty();
        
        // Caso essas validações não retornem OK,
        // este método retornará true -> req.validationErrors()
        var erros = req.validationErrors();

        if (erros) {
            res.render('admin/form_add_noticia', {validacao: erros, noticia: noticia});
            return;
        }

        // conexao
        var connection = application.config.dbConnection();
        // model
        var noticiasModel = new application.app.models.NoticiasDAO(connection);
        //salvarNoticia
        noticiasModel.salvarNoticia(noticia, (err, result) => {
            res.redirect('/noticias');
        });
}