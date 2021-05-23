module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia" );
    });
    application.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        //res.send(noticia);
        var connection = application.config.dbConnection();
        var noticiaModel = new application.app.models.NoticiasDAO(connection);
        
        noticiaModel.salvarNoticia(noticia,function(erro,result){
            //res.send(result);
            res.redirect('/noticias');
        });
    });
}