const app = require('./config/server');

// Apenas exemplo simples
// app.get('/tecnologia', (req, res) => {
//     // sem ejs
//     // res.send('<html><body>Notícias de tecnologia</body></html>')

//     // com ejs
//     res.render('secao/tecnologia');
// });

// Outra forma: var rotaNoticias = require('./app/routes/noticias')(app);
var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaAdmin = require('./app/routes/admin');
rotaAdmin(app);

app.listen(3000, () => {
    console.log('Servidor ON');
    // console.log(modulo_teste());
});