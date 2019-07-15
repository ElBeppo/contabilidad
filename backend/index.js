'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 33133;
var route = 'localhost:27017';
var db = 'proyecto_contabilidad';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://'+route+'/'+db, { useNewUrlParser: true } ).then(() => {
    console.log("Conexión establecida con exito...");

    //Creacion del servidor
    app.listen(port, () => {
        console.log("Servidor corriendo correctamente en localhost:"+port);
    });

}).catch((error) => {
    console.log(error);
});