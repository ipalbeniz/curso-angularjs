angular.module('app', [])

.value('porcentajeDescuento', 0.8)

.factory('calculoDescuento', function(porcentajeDescuento) {
    return function(numero) {
        return numero * porcentajeDescuento;
    };
})

.factory('calculoFactorial', function() {
    return function(numero) {
        var resultado = 1;
        for (var i = 1; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    };
})

.directive('mensaje', function() {
    return function(scope, element, attrs) {
        var opciones = scope.$eval(attrs.mensaje);
        var resultado = opciones.caracter + ' ' + opciones.texto + ' ' + opciones.caracter;
        element.text(resultado);
    };
})

.directive('eliminaLetra', function() {
    return function(scope, element, attrs) {
        var letra = attrs['eliminaLetra'];
        var resultado = element.text().replace('o', '');
        element.text(resultado);
    };
})

.directive('descuento', function(calculoDescuento) {
    return function(scope, element, attrs) {
        var precio = scope.$eval(attrs.descuento);
        var precioDescuento = calculoDescuento(precio);
        element.html(precioDescuento);
    };
})

.directive('factorial', function(calculoFactorial) {
    return {
        restrict: 'E',
        templateUrl: 'factorial.html',
        link: function (scope, element, attrs) {
            console.log('atributoss' + JSON.stringify(attrs));
            var num = attrs['numero'];
            var resultado = calculoFactorial(num);
            element.text(num + '! = ' + resultado);
        }
    };
});
