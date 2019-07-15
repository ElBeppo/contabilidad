'use strict'

var Tipo = require('../models/tipo');
var fs = require('fs');
var path = require('path');

var TipoController = {
    addTipo: function(req, res) {
        var tipo = new Tipo();

        var params = req.body;
        tipo.name = params.name;

        tipo.save((err, tipoGuardado) => {
            if(err) return res.status(500).send({ message: 'error al guardar'});
            if(!tipoGuardado) return res.status(404).send({ message: 'No se ha podido guardar el tipo'})

            return res.status(200).send(
                {
                    tipo: tipoGuardado,
                    params: req.body
                });
        });
    },
    getTipos: function(req, res) {
        Tipo.find({}).exec((err, tipos) => {
            if(err) return res.status(500).send({ message: 'error al cargar tipos'});
            if(!tipos) return res.status(404).send({ message: 'No se han encontrado tipos'})

            return res.status(200).send({tipos: tipos});
        });
    },
    deleteTipo: function(req, res) {
        const tipoId = req.params.id;
        Tipo.findByIdAndDelete(tipoId, (err, deletedTipo) => {
            if(err) return res.status(500).send({ message: 'error al borrar el tipo'});
            if(!deletedTipo) return res.status(404).send({ message: 'No se han encontrado ese tipo'})

            return res.status(200).send({tipo: deletedTipo});
        });
    }
};

module.exports = TipoController;
