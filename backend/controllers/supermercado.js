'use strict'

var Supermercado = require('../models/supermercado');
var fs = require('fs');
var path = require('path');

var SupermercadoController = {
    home: function(req, res) {
        return res.status(200).send({
            message: 'hello world!'
        });
    },
    addSupermercado: function(req, res) {
        var supermercado = new Supermercado();

        var params = req.body;
        supermercado.name = params.name;

        supermercado.save((err, supermercadoGuardado) => {
            if(err) return res.status(500).send({ message: 'error al guardar'});
            if(!supermercadoGuardado) return res.status(404).send({ message: 'No se ha podido guardaar el supermercado'})

            return res.status(200).send({supermercado: supermercadoGuardado});
        });
    },
    getSupermercados: function(req, res) {
        Supermercado.find({}).exec((err, supermercados) => {
            if(err) return res.status(500).send({ message: 'error al cargar Supermercados'});
            if(!supermercados) return res.status(404).send({ message: 'No se han encontrado supermercados'})

            return res.status(200).send({supermercados: supermercados});
        });
    },
    deleteSupermercado: function(req, res) {
        const supermercadoId = req.params.id;
        Supermercado.findByIdAndDelete(supermercadoId, (err, deletedSupermercado) => {
            if(err) return res.status(500).send({ message: 'error al cargar Supermercados'});
            if(!deletedSupermercado) return res.status(404).send({ message: 'No se han encontrado supermercados'})

            return res.status(200).send({supermercado: deletedSupermercado});
        });
    }
};

module.exports = SupermercadoController;