
const Registro = require('../models').Registro;

// middleware que busca el usuario
module.exports = function(req,res,next){
    if(!req.session.userId) return next(); 
   Registro.findByPk(req.session.userId).then(user =>{
            if(user){
                req.userId = user  ;
                next(); 
            } 
        })
}
