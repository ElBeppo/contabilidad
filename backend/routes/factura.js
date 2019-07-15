'use strict'

var express = require('express');
var FacturaController = require('../controllers/factura');

var router = express.Router();

router.post('/add-factura', FacturaController.addFactura);
router.get('/facturas', FacturaController.getFacturas);
router.delete('/delete-factura/:id', FacturaController.deleteFactura);

module.exports = router;
