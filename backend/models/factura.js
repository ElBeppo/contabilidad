'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FacturaSchema = Schema({
    total: Number,
    fechaFactura:  { type: Date, default: Date.now },
    supermercado: {type: mongoose.Schema.Types.ObjectId, ref: 'Supermercado'},
    tipo: {type: mongoose.Schema.Types.ObjectId, ref: 'Tipo'}
});

module.exports = mongoose.model('Factura', FacturaSchema);
