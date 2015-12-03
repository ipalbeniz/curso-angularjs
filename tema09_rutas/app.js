angular.module('app', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: './vistas/home.html'
        })
        .when('/items', {
            controller: 'ItemsController',
            templateUrl: './vistas/items/index.html'
        })
        .when('/item/:itemId', {
            controller: 'ItemController',
            templateUrl: './vistas/items/index.html'
        });
})

.filter('unique', function() {
    return function(elements, uniqueBy) {
        var uniqueElements = new Set();

        for (var i = elements.length - 1; i >= 0; i--) {
            uniqueElements.add(elements[i][uniqueBy]);
        }

        return Array.from(uniqueElements);
    };
})

.factory('ItemService', function(filterFilter) {
    var elementos = [{
        id: 1,
        name: 'Elemento rojo 1',
        color: 'rojo'
    }, {
        id: 2,
        name: 'Elemento rojo 2',
        color: 'rojo'
    }, {
        id: 3,
        name: 'Elemento rojo 3',
        color: 'rojo'
    }, {
        id: 4,
        name: 'Elemento rojo 4',
        color: 'rojo'
    }, {
        id: 5,
        name: 'Elemento azul 1',
        color: 'azul'
    }, {
        id: 6,
        name: 'Elemento azul 2',
        color: 'azul'
    }, {
        id: 7,
        name: 'Elemento azul 3',
        color: 'azul'
    }, {
        id: 8,
        name: 'Elemento verde 1',
        color: 'verde'
    }, {
        id: 9,
        name: 'Elemento verde 2',
        color: 'verde'
    }, {
        id: 10,
        name: 'Elemento blanco 1',
        color: 'blanco'
    }];

    return {
        query: function(params) {
            return filterFilter(elementos, params);
        },
        get: function(params) {
            return this.query(params)[0];
        }
    };
})

.controller('HomeController', function($scope, $location, ItemService) {
    $scope.location = $location.absUrl();
    $scope.items = ItemService.query();
})

.controller('ItemsController', function($scope, $location, ItemService) {
    $scope.location = $location.absUrl();
    $scope.items = ItemService.query({
        color: $location.search().color
    });
})

.controller('ItemController', function($scope, $location, $routeParams, ItemService) {
    $scope.location = $location.absUrl();
    $scope.items = ItemService.query({
        id: $routeParams.itemId
    });
});
