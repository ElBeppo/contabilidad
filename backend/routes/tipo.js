'use strict'

var express = require('express');
var TipoController = require('../controllers/tipo');

var router = express.Router();

router.post('/add-tipo', TipoController.addTipo);
router.get('/tipos', TipoController.getTipos);
router.delete('/delete-tipo/:id', TipoController.deleteTipo);

module.exports = router;