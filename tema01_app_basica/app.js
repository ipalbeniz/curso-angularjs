angular.module('helloWorldApp', [])
	.controller('HelloController', ['$scope', function($scope) {
		$scope.saludo = {
			text: 'Hola'
		};
		$scope.showSkeleton = false;
	}]);