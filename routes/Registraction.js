const express= require('express');


let registroController= require('../controllers/registroController');

let router = express();

//registrar un usuario
router.get('/signup', registroController.new);
// redirige a un formulario, que guarda la informacion
router.route('/users').post(registroController.create)


module.exports = router;