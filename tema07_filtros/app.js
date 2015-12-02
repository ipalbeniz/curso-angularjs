/*
 App module
 */
angular.module('app', [])

.controller('PeliculasController', function($scope) {
    $scope.peliculas = [{
        name: 'Boyhood',
        year: 2015,
        oscar: 'no'
    }, {
        name: 'Birdman',
        year: 2015,
        oscar: 'si'
    }, {
        name: 'El gran hotel Budapest',
        year: 2015,
        oscar: 'no'
    }, {
        name: '12 años de esclavitud',
        year: 2014,
        oscar: 'si'
    }, {
        name: 'Gravity',
        year: 2014,
        oscar: 'no'
    }, {
        name: 'Her',
        year: 2014,
        oscar: 'no'
    }, {
        name: 'La vida de Pi',
        year: 2013,
        oscar: 'no'
    }, {
        name: 'Django Desencadenado',
        year: 2013,
        oscar: 'no'
    }, {
        name: 'Argo',
        year: 2013,
        oscar: 'si'
    }, {
        name: 'Lincoln',
        year: 2013,
        oscar: 'no'
    }];
});
