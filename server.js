//importar libs/modules
var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path = require('path');

//App server configuration
var config = require('./config');

//Import de Controladores de rutas
var indexRoute = require('./routes/index');
var apiRoute = require('./routes/api');


//Init app server
var app = express();
	app.set('port', config.port);//Puerto del server
	app.set('views', path.join(__dirname, 'views'));//Directorio de vistas
	app.set('view engine', 'ejs'); //Motor de vistas
	app.set('env', config.env);

//Middleware application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//Impl de rutas
app.use('/', indexRoute);
app.use('/api', apiRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//middleware development error handler
app.use(function(err, req, res, next) {	
	// will print stacktrace
	if (app.get('env') === 'development') {
		res.status(err.status || 500);
	  	res.render('error', {
	    	message: err.message,
	    	error: err
	  	}); 
	}else{
		//Entorno de production
	  	app.use(function(err, req, res, next) {
	    	if(err.status === 404){
	      		//res.render('error-pages/error404', {domain : config.domain });
	    	}else{
	      		//res.render('error-pages/error', {domain : config.domain });
	    	}
	  	});
	}
});

//Create a server
var server = app.listen(config.port, function (){
	console.log('Express server listening on port : ', server.address().port);
});

//Conexion a la BD
mongoose.connect(config.uriDB);

//Control de conexiones
var db = mongoose.connection;
	db.on('error', function (){
		console.error('Error al conectarse a mongodb');
	});
	
	db.once('open', function (){
		console.log('Conectado a mongodb exitosamente');
	});