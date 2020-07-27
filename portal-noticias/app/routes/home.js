module.exports = function(application) {
    application.get('/', (req, res) => {
        // res.render('home/index');
        application.app.controllers.home.index(application, req, res);
    });
}