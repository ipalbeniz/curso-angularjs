/*
 Math module
 */
angular.module('math', [])

.service('MathService', function () {
	this.suma = function(num1, num2) {
		return num1 + num2;
	};
	this.resta = function(num1, num2) {
		return num1 - num2;
	};
	this.multiplica = function(num1, num2) {
		return num1 * num2;
	};
	this.divide = function(num1, num2) {
		return num1 / num2;
	};
})

.service('CalculatorService', function (MathService) {
	this.cuadrado = function(num) {
		return MathService.multiplica(num, num);
	};
	this.cubo = function(num) {
		return MathService.multiplica(MathService.multiplica(num, num),num);
	};
});



/*
 App module
 */
angular.module('app', ['math'])

.value('contador', {
    num: 0
})

.controller('ContadorController', function($scope, contador, CalculatorService) {
	console.log('contador: ' + CalculatorService.cuadrado(3));
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



