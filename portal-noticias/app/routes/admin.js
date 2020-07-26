// Para que este arquivo consiga acessar o objeto app
// precisamos passar ele via parâmetro aqui e onde for chamado
module.exports = function(app) {
    app.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', (req, res) => {
        var noticia = req.body;
        // res.send('Chegou na página');
        // res.send(noticia);

        // conexao
        var connection = app.config.dbConnection();
        // model
        var noticiasModel = app.app.models.noticiasModel;
        //salvarNoticia
        noticiasModel.salvarNoticia(noticia, connection, (err, result) => {
            res.redirect('/noticias');
        });
    });
}   
