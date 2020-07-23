var modulo_teste = 'Este módulo contém apenas uma string';

// Mesma coisa mas como ES6 module
//export default modulo_teste;
module.exports = modulo_teste;

// Outra forma de escrever este mesmo módulo
// module.exports = function() {
//     var msg = 'Este módulo contém apenas uma string';

//     return msg;
// }