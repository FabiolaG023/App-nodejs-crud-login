
const Registro = require('../models').Registro;
const {Model} = require('sequelize');
const { destroy } = require('./articulosControllers');
module.exports = {
    new: function(req, res){res.render('sessions/login');
    },
    create: function(req,res){
    Registro.login(req.body.email, req.body.password)
    .then(user => {
        if(user){
            req.session.userId = user.id
        }
        res.redirect('/tienda/product');
    })
    },
    destroy: function(req, res){
        req.session.destroy(function(){
            res.redirect('/sessions');
        });
    }

};