//Import modules
var express = require('express'),
	indexRouter = express.Router();

//Control de peticiones
indexRouter.get('*', function (req, res){
	res.render('index');
});

module.exports = indexRouter;