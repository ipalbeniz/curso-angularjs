angular.module('app', [])

.controller('DuplicadosControlador', function($scope) {

    $scope.usuarios = [{
        nombre: 'Inaki'
    }, {
        nombre: 'Luigi'
    }, {
        nombre: 'Mario'
    }];

    $scope.elementos = [1, 2, 3];
    //$scope.elementos = ['hola','adios','hola'];
})

.controller('TemarioController', function($scope) {
    $scope.temas = [{
        nombre: "Tema 1",
        items: [{
            nombre: 'Capitulo 1.1'
        }, {
            nombre: 'Capitulo 1.2'
        }]
    }, {
        nombre: "Tema 2",
        items: [{
            nombre: 'Capitulo 2.1'
        }, {
            nombre: 'Capitulo 2.2'
        }]
    }, ];
})

.controller('CallbackController', function($scope) {
    $scope.tareas = [{
        id: 1,
        desc: "Hacer la compra"
    }, {
        id: 2,
        desc: "Sacar al perro"
    }, {
        id: 3,
        desc: "Recoger la ropa"
    }, {
        id: 4,
        desc: "Arreglar ordenador"
    }];

    $scope.ultimoId = 5;
    $scope.descNuevaTarea = '';

    $scope.eliminarTarea = function(item) {
    	var index = $scope.tareas.indexOf(item);
    	$scope.tareas.splice(index,1);
    };

    $scope.nuevaTarea = function() {
    	$scope.tareas.push({id: $scope.ultimoId, desc: $scope.descNuevaTarea});
    	$scope.ultimoId++;
    	$scope.descNuevaTarea = '';
    };
});
