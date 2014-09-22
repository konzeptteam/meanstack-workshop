'use strict';

angular.module('coffee_shop', [
	'ngRoute',
	'coffee_shop.list'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
