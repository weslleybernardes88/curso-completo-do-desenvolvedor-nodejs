var  mysql = require('mysql');
var connMySQL = function(){
    console.log('Conexao com bd foi estabelecida');
    return mysql.createConnection({
        host:'localhost'
        ,port: '3306'
        ,user:'root'
        ,password:'root'
        ,database:'nodedb'
    });
}
module.exports = function (){
    console.log('O autoload carregou o módulo de conexão com bd');
    return connMySQL;
}