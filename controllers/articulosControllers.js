const Articulo = require('../models').Articulo;
const Registro = require('../models').Registro;

module.exports = {
    home: function(req,res){// despliega una lista de articulos
        Articulo.findAll().then((items)=>{res.render('vistas/product',{items})})
    },
    create: function(req, res){// crea un nuevo articulo
       Articulo.create({
        descripcion: req.body.descripcion,
        articulo: req.body.articulo,
        precio: req.body.precio,
        userId: req.session.userId 
       }).then(resul=>{res.json(resul);}) // devuelve el resultado en un JSON
        .catch(err=>{res.json(err);}) // devueleve el error JSON
    },
    new: function (req,res) {// renderiza el formulario desde la vista
        res.render('vistas/new');  
    },
    show: function(req,res){// renderiza el articulos desde la vista
        Articulo.findByPk(req.params.id)
        .then(items=>{res.render('vistas/show', {items});})
    },
    edit: function(req,res){//selecciona el articulo de acuerdo a su ID
        Articulo.findByPk(req.params.id)
        .then(items=>{res.render('vistas/edit', {items});})
        .catch(err=>{res.json(err)})
    },
    update:function(req, res){// actualiza el articulo previamente seleccionado
        Articulo.update({
            descripcion: req.body.descripcion,
            articulo: req.body.articulo,
            precio: req.body.precio
        },{
                where:{id: req.params.id}
            })
        .then(resul=>{res.redirect('/tienda/product/show/'+req.params.id)})  // Redirecciona al articulo ya editado
    },
    destroy: (req,res)=>{
        Articulo.destroy({where:{id: req.params.id}})
        .then(function(eliminador){res.redirect('/tienda/product')}) 
    }
   
};