//Modulo routes
var appRoutes = angular.module('appRoutes', ['ngRoute']);

appRoutes.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'app/pages/index.html'			
	})
	.when('/about', {
		templateUrl: 'app/pages/about.html'			
	})
	.when('/contacto', {
		templateUrl: 'app/pages/contacto.html'		
	})
	.when('/galeria', {
		templateUrl: 'app/pages/galeria.html'
	})
	.otherwise({ redirectTo: '/' })
}]);