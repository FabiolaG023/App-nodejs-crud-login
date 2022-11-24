
const Registro = require('../models').Registro;

module.exports = {
    new: function(req, res){res.render('registrations/new')
    },
    create: function(req,res){
        let data ={
        email:req.body.email,
        password: req.body.password
    };
    Registro.create(data)
    .then(result=>{res.json(result);})
    .catch(err=>{res.json(err);});
    }
};