var $ = require('jquery');
var persona = require('./app.persona');

$('#msg').html('Hola Browserify. Mirar en la consola para ver resultados adicionales.');

var carlos = new persona("Carlos", 30);
carlos.saludar();
carlos.presentar();
