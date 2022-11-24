module.exports = function(req,res,next){
  // middleware
  // //si el req no contine el urlOriginal e incluye "tienda" retornar a la siguiente funcion
  // si req.sesion.userId existe retorna a la sigiente
  // redireciona a /sessions

    if(!req.originalUrl.includes("tienda")) return next();
    if(req.session.userId) return next();
    res.redirect('/sessions'); 

   
  
  } 

  