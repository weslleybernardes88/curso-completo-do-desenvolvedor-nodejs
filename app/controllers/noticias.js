module.exports.noticias = function(application,req,res){
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
}
module.exports.noticia = function(application,req,res){
    var connection = application.config.dbConnection();
        connection.connect( function(err){
            if (err){ 
                throw err;
            }
            else {
                console.log('Connected');
            }
        });
        
        var noticiaModel = new application.app.models.NoticiasDAO(connection);

        noticiaModel.getNoticia(function(erro,result){
            //res.send(result);
            res.render("noticias/noticia",{noticia: result})
        });
        //res.render("noticias/noticias" );
}