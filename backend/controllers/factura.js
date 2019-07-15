'use strict'

var Factura = require('../models/factura');
var fs = require('fs');
var path = require('path');

var FacturaController = {
    addFactura: function(req, res) {
        var factura = new Factura();

        var params = req.body;
        factura.total = params.total;
        factura.fechaFactura = params.fechaFactura;
        factura.supermercado = params.supermercado;
        factura.tipo = params.tipo;

        factura.save((err, facturaGuardado) => {
            if(err) return res.status(500).send({ message: err});
            if(!facturaGuardado) return res.status(404).send({ message: 'No se ha podido guardar el Factura'})

            return res.status(200).send(
                {
                    Factura: facturaGuardado,
                    params: req.body
                });
        });
    },
    getFacturas: function(req, res) {
        Factura.find({}).exec((err, facturas) => {
            if(err) return res.status(500).send({ message: 'error al cargar Facturas'});
            if(!facturas) return res.status(404).send({ message: 'No se han encontrado Facturas'})

            return res.status(200).send({facturas: facturas});
        });
    },
    deleteFactura: function(req, res) {
        const facturaId = req.params.id;
        Factura.findByIdAndDelete(facturaId, (err, deletedFactura) => {
            if(err) return res.status(500).send({ message: 'error al borrar el Factura'});
            if(!deletedFactura) return res.status(404).send({ message: 'No se han encontrado ese Factura'})

            return res.status(200).send({factura: deletedFactura});
        });
    }
};

module.exports = FacturaController;
