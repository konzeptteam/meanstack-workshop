'use strict';

angular.module('coffee_shop.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/list', {
		templateUrl: 'list/list.html',
		controller: 'ListCtrl'
	});
}])

.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('/coffee').success(function(data) {
		$scope.coffees = data;
	});
}]);
