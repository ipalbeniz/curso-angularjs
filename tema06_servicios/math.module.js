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