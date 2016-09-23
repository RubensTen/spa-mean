var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//Definicion del modelo
var usuarioSchema = Schema({
	nombre: {type: String, required: [true, 'nombre requerido']},
	password: {type:String, required: [true, 'password es requerido']},
	edad: Number
});

module.exports = mongoose.model('Usuario', usuarioSchema);