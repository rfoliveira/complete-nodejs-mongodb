// Uma maneira de se definir a classe...
// function Noticias(connection) {
//     this._connection = connection;
// }

// // Obs.: se usar o código abaixo não funciona:
// // Noticias.prototype.getNoticias = (callback) => { ... }
// // Como é uma function declaration, precisa usar "function()" nos métodos
// Noticias.prototype.getNoticias = function(callback) {
//     this._connection.query('select * from noticias', callback);
// }

// Noticias.prototype.getNoticia = function(callback) {
//     this._connection.query('select * from noticias where id_noticia = 2', callback);
// }

// Noticias.prototype.salvarNoticia = function(noticia, callback) {
//     // Pega o string do json e substitui no texto do insert
//     // Isso é do driver do mysql
//     this._connection.query('insert into noticias set ? ', noticia, callback);
// }

// Outra forma (melhor)
class NoticiasDAO {
    
    constructor(connection) {
        this._connection = connection;
    }

    getNoticias(callback) {
        this._connection.query('select * from noticias', callback);
    }

    getNoticia(id, callback) {
        this._connection.query('select * from noticias where id_noticia = ' + id.id, callback);
    }

    salvarNoticia(noticia, callback) {
        this._connection.query('insert into noticias set ? ', noticia, callback);
    }

    get5UltimasNoticias(callback) {
        this._connection.query('select * from noticias order by data_noticia desc limit 5', callback);
    }
}

module.exports = function () {
    return NoticiasDAO;
}