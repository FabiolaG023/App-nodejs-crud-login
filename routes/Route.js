const express = require('express');

const ArticuloController = require('../controllers/articulosControllers');

let router = express.Router();

//muetra los articulos y creo uno nuevo
router.route('/tienda/product').get(ArticuloController.home).post(ArticuloController.create);


// redirige a un formulario, que guarda la informacion, de un solo articulo
router.get('/tienda/product/newForm', ArticuloController.new);

// redirige a un formulario, que edita la informacion, de un solo articulo
router.get('/tienda/product/show/edit/:id', ArticuloController.edit);

//muestra un ariculo, para su actualizacion

router.route('/tienda/product/show/:id')
.get(ArticuloController.show)
.put(ArticuloController.update)
.delete(ArticuloController.destroy);



module.exports = router;