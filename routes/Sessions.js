const express = require('express');

let SessionsController = require('../controllers/sessionsController');
let router = express.Router();

router.route('/sessions')
.get(SessionsController.new)
.post(SessionsController.create)
.delete(SessionsController.destroy);

module.exports= router;