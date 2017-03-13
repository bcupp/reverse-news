var app = angular.module('myMod');

app.controller('controller1', function($scope, newService){

//handoff from factory
newService.getNews().then( function() {
  $scope.displayedNews = newService.returnNews;
  console.log($scope.displayedNews);
});


});
