var app = angular.module('myMod');


app.config(function($routeProvider, $locationProvider ) {

    $routeProvider
        .when('/reverseFilter', {
            controller: 'controller1',
            templateUrl: 'partials/reverseFilter.html'
        })
        .when('/normalFilter', {
            controller: 'controller1',
            templateUrl: 'partials/normalFilter.html'
        })
        .otherwise('/reverseFilter', {
            controller: 'controller1',
            templateUrl: 'partials/reverseFilter.html'
        });
    $locationProvider.html5Mode(false).hashPrefix('');


});
