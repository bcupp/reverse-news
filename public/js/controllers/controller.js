var app = angular.module('myMod');

app.controller('controller1', function($scope, newService) {
    $scope.displayedNewsPromise = [];
    //handoff from factory

    var newsFeed;


  newService.getNews().then(function(resultOfPromise) {
      $scope.displayedNewsPromise = resultOfPromise;
      console.log($scope.displayedNewsPromise);
      newsFeed = resultOfPromise;
  });



  $scope.userSearch = function(userInput){
    var reverseFilter =[];
    var normFilter =[];

    newsFeed.forEach(function (article){
      var n = article.title.search(new RegExp(userInput, "i"));
      if (n > -1){
        normFilter.push(article);
      } else {
        reverseFilter.push(article);
      };
    });

    $scope.news = {
      reverseFilter: reverseFilter,
      normFilter: normFilter
      };
      console.log($scope.news);
};







});
