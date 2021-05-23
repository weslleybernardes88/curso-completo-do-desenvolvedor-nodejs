var dbConnection = require('../../config/dbConnection');
module.exports = function(app){
    
    var connection = dbConnection();
    app.get('/noticias', function(req, res){

        

        connection.connect( function(err){
            if (err){ 
                throw err;
            }
            else {
                console.log('Connected');
            }
        });
        
        connection.query('select * from noticias',function(erro,result){
            //res.send(result);
            res.render("noticias/noticias",{noticias: result})
        });
        //res.render("noticias/noticias" );
    });
}
