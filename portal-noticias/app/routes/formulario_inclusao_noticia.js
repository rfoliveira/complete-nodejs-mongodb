// Para que este arquivo consiga acessar o objeto app
// precisamos passar ele via parâmetro aqui e onde for chamado
module.exports = function(app) {
    app.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });
}   
