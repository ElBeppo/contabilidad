'use strict'

var express = require('express');
var SupermercadoController = require('../controllers/supermercado');

var router = express.Router();


router.get('/supermercado-home', SupermercadoController.home);
router.post('/add-supermercado', SupermercadoController.addSupermercado);
router.get('/supermercados', SupermercadoController.getSupermercados);
router.delete('/delete-super/:id', SupermercadoController.deleteSupermercado);

module.exports = router;