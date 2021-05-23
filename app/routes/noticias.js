//var dbConnection = require('../../config/dbConnection');
module.exports = function(application){
    
    
    
    application.get('/noticias', function(req, res){

        
        var connection = application.config.dbConnection();
        connection.connect( function(err){
            if (err){ 
                throw err;
            }
            else {
                console.log('Connected');
            }
        });
        
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(erro,result){
            //res.send(result);
            res.render("noticias/noticia",{noticia: result})
        });
        //res.render("noticias/noticias" );
    });
    
}
