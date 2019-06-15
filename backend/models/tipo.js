'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoSchema = Schema({
    name: String
});

module.exports = mongoose.model('Tipo', TipoSchema);
