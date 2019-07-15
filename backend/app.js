//Configuracion de express
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos de rutas
var supermercado_routes = require('./routes/supermercado');
var tipo_routes = require('./routes/tipo');
var factura_routes = require('./routes/factura');
//var project_routes = require('./rutes/project');

// middlewares
app.use(bodyParser.urlencoded({extended: false})); //Configuracion necesaria de bodyParser
app.use(bodyParser.json());//Decirle que cualquier peticion que te llegue la convierta los datos en JSON

// CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
app.use('/api', supermercado_routes);
app.use('/api', tipo_routes);
app.use('/api', factura_routes);
//app.use('/api', project_routes); // si lo deajas en / se mantiene la ruta, si le añades algo seria /algo/ruta
//Exportar
module.exports = app;