// Demonstrando o processamento de requisições http
const http = require('http');

var server = http.createServer((req, res) => {
    var categoria = req.url.split('/');

    if (categoria[1])
        res.end(`<html><body>Notícias de ${categoria[1]}</body></html>`)
    else
        res.end('<html><body>Portal de notícias</body></html>');
});

server.listen(3000);
