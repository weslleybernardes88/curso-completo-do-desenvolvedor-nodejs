module.exports.formulario_inclusao_noticia = function (application, req,res){
    res.render("admin/form_add_noticia", {validacao:{},noticia:{}});
}

module.exports.noticias_salvar = function(application,req,res){
    var noticia = req.body;
        //res.send(noticia);
        req.assert('titulo','Título é obrigatório').notEmpty();
        req.assert('noticia','O campo  notícia é obrigatório').notEmpty();
        req.assert('resumo','O campo resumo é obrigatório').len(10,100);
        req.assert('autor','O autor é obrigatório').notEmpty();
        req.assert('data_noticia','A data da notícia é obrigatória').isDate({format:'YYYY-MM_DD'});

        var erros = req.validationErrors();
        console.log(erros);
        if(erros){
            res.render('admin/form_add_noticia',{validacao:erros, noticia:noticia});
            return
        }
        var connection = application.config.dbConnection();
        var noticiaModel = new application.app.models.NoticiasDAO(connection);
        
        noticiaModel.salvarNoticia(noticia,function(erro,result){
            //res.send(result);
            res.redirect('/noticias');
        });
}