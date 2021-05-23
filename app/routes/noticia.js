//var dbConnection = require('../../config/dbConnection');
module.exports = function(application){
    
    
    
    application.get('/noticia', function(req, res){

        
        var connection = application.config.dbConnection();
        connection.connect( function(err){
            if (err){ 
                throw err;
            }
            else {
                console.log('Connected');
            }
        });
        
        var noticiaModel = application.app.models.noticiasModel;

        noticiaModel.getNoticia(connection,function(erro,result){
            //res.send(result);
            res.render("noticias/noticia",{noticia: result})
        });
        //res.render("noticias/noticias" );
    });
    
}
