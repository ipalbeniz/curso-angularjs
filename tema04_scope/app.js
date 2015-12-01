angular.module('app', [])

.controller('ControladorPadre', function($scope) {})

.controller('ControladorHijo', function($scope) {})

.controller('SumaControlador', function($scope) {
    $scope.valores = [1, 2];
    $scope.valorNuevo = 1;

    $scope.agregar = function() {
        $scope.valores.push(parseInt($scope.valorNuevo));
    };

    $scope.$watch('valores', function() {
        $scope.sum = $scope.valores.reduce(function(a, b) {
            return a + b;
        });
    }, true);
})

.controller('FlechasController', function($scope, $element) {
    $scope.mensaje = "Pulsa alguna de las flechas";
    $element.bind('keyup', function(event) {
        if (event.keyCode === 37) { // flecha izquierda
            $scope.$apply(function() {
                $scope.mensaje = 'Hemos pulsado la flecha izquierda';
            });
        } else if (event.keyCode === 38) { // flecha arriba
            $scope.$apply(function() {
                $scope.mensaje = 'Hemos pulsado la flecha arriba';
            });
        } else if (event.keyCode === 39) { // flecha derecha
            $scope.$apply(function() {
                $scope.mensaje = 'Hemos pulsado la flecha derecha';
            });
        } else if (event.keyCode === 40) { // flecha abajo
            $scope.$apply(function() {
                $scope.mensaje = 'Hemos pulsado la flecha abajo';
            });
        }
    });
});
