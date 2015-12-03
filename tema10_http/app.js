angular.module('app', ['angular-loading-bar', 'uiGmapgoogle-maps', 'google.places'])

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})

.controller('WeatherController', function($scope, $http) {
    $scope.autocompleteOptions = {
        componentRestrictions: {
            country: 'es'
        },
        types: ['geocode']
    };

    $scope.getWeather = function() {
        $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + $scope.citySelected.address_components[0].long_name + ",es&units=metric&lang=es&APPID=4699be61f7412c1d200eeb9d559b0408")
            .success(function(data) {
                $scope.weather = data;
                $scope.iconUrl = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
                $scope.map = {
                    center: {
                        latitude: data.coord.lat,
                        longitude: data.coord.lon
                    },
                    zoom: 12
                };
            });
    };
});
