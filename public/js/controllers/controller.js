var app = angular.module('myMod');

app.controller('controller1', function($scope, newService) {
    $scope.displayedNewsPromise = [];
    //handoff from factory

    newService.getNews().then(function(resultOfPromise) {
        $scope.displayedNewsPromise = resultOfPromise;
        console.log($scope.displayedNewsPromise);

    });


    //
    // $scope.displayedNews = newService.getNews();
    // console.log($scope.displayedNews);


});
