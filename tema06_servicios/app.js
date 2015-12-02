/*
 App module
 */
angular.module('app', ['math'])

.value('contador', {
    num: 0
})

.controller('ContadorController', function($scope, contador, CalculatorService) {
    $scope.cont = contador;
    $scope.incrementarContador = function() {
        $scope.cont.num++;
    };
})

.controller('CalculadoraController', function($scope, contador, CalculatorService) {
	$scope.calcularCuadrado = function () {
		$scope.respuesta = CalculatorService.cuadrado($scope.num);
	};
	$scope.calcularCubo = function () {
		$scope.respuesta = CalculatorService.cubo($scope.num);
	};
});



