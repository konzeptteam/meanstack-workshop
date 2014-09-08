'use strict';

angular.module('coffee_shop', [
	'ngRoute',
	'coffee_shop.list',
	'coffee_shop.detail'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
