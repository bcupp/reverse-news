var app = angular.module('myMod');

app.controller('controller1', function($scope, newService){

//handoff from factory

$scope.displayedNews = newService.getNews()
.then(function(resultOfPromise) {
var displayedNewsPromise = resultOfPromise;
   console.log(displayedNewsPromise);

 });


//
// $scope.displayedNews = newService.getNews();
// console.log($scope.displayedNews);


});
