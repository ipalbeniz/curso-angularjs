angular.module('app', [])

.controller('OcultarController', ['$scope', OcultarController])

.controller('SumarController', ['$scope', SumarController])

.controller('MouseController', ['$scope', MouseController]);


function OcultarController($scope) {
    $scope.oculto = true;

    $scope.cambioColor = function() {
        $scope.oculto = !$scope.oculto;
    };
}

function SumarController($scope) {
    $scope.operando1 = 0;
    $scope.operando2 = 0;
    $scope.valores = [1, 2, 3, 4, 5];

    $scope.sumar = function() {
        return $scope.operando1 + $scope.operando2;
    };
}

function MouseController($scope) {

    $scope.entraMouse = function($event) {
        $scope.mouseMessage = 'El ratón ha entrado! <:3)~';
    };

    $scope.saleMouse = function($event) {
        $scope.mouseMessage = 'El ratón se fue! ~<>^>';
    };
    
    $scope.clickMouse = function($event) {
        $scope.mouseMessage = 'Click en la posición: ' + $event.pageX + ' - ' + $event.pageY;
    };
}
