var express = require('express');
var apiRouter = express.Router();
var Usuario = require('../models/Usuario');

apiRouter.get('/saludo', function (req, res){
	res.json({
		success: true,
		mensaje: 'hola mundo'
	});
});

//API USUARIO

apiRouter.get('/usuario', function (req, res){
	Usuario.find({}, function (err, usuarios){
		if (err) {
			return res.json({
				err: true,
				mensaje: 'Error al consultar usuarios'
			});
		} else{
			return res.json({
				success: true,
				usuarios: usuarios
			});
		}
	});
});


//Creacion de un usuario
apiRouter.post('/usuario', function (req, res){
	var nuevoUsuario = new Usuario(req.body.usuario);
	nuevoUsuario.save(function (err, result){
		if (err) {
			res.json({
				err: true,
				mensaje: 'Error al crear usuario'
			});
		} else{
			res.json({
				success: true,
				resultado: result			
			});
		}
	});
});

//Busqueda de usuario por id
apiRouter.get('/usuario/:id', function (req, res){
	Usuario.findById(req.params.id, function (err, usuario){
		if (err) {
			res.json({
				err: true,
				mensaje: 'Error al consultar usuario por id'
			});
		} else{
			res.json({
				success: true,
				usuario: usuario
			});
		}
	});
});

//Actualiza un usuario por medio del id
apiRouter.put('/usuario/:id', function (req, res){
	Usuario.findOneAndUpdate({'_id': req.params.id}, req.body.usuario, function (err, usuarioResult){
		if (err) {
			res.json({
				err: true,
				mensaje: 'Error al actualizar usuario por id'
			});
		} else{
			res.json({
				success: true,
				resultado: usuarioResult
			});
		}
	});
});

//Eliminacino de usuario por id
apiRouter.delete('/usuario/:id', function (req, res){
	Usuario.findOneAndRemove({'_id': req.params.id}, function (err){
		if (err) {
			res.json({
				err: true,
				mensaje: 'Error al eliminar usuario por id'
			});
		} else{
			res.json({
				success: true,
				mensaje: 'Usuario eliminado exitosamente'
			});
		}
	});
});

module.exports = apiRouter;
