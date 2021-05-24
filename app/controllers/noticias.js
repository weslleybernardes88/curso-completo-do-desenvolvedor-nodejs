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
            res.render("noticias/noticias",{noticias: result})
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
        console.log(req.query);
        id_noticia = req.query;

        var noticiaModel = new application.app.models.NoticiasDAO(connection);

        noticiaModel.getNoticia(id_noticia,function(erro,result){
            //res.send(result);
            res.render("noticias/noticia",{noticia: result})
        });
        //res.render("noticias/noticias" );
}