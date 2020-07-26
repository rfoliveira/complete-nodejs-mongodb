module.exports = function () {
    
    this.getNoticias = (connection, callback) => {
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = (connection, callback) => {
        connection.query('select * from noticias where id_noticia = 2', callback);
    }

    this.salvarNoticia = (noticia, connection, callback) => {
        // Pega o string do json e substitui no texto do insert
        // Isso é do driver do mysql
        connection.query('insert into noticias set ? ', noticia, callback);
    }

    return this;
}