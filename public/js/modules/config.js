var app = angular.module('myMod');


app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      controller: '',
      templateUrl: '.html'
    })
    .when('/', {
      controller: '',
      templateUrl: '.html'
    });

  $locationProvider.hashPrefix('');
});
