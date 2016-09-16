var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//Definicion del modelo
var usuarioSchema = Schema({
	nombre: String,
	password: String,
	edad: Number
});

module.exports = mongoose.model('Usuario', usuarioSchema);