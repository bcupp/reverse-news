var app = angular.module('myMod');

app.controller('controller1', function($scope, newService) {
    $scope.displayedNewsPromise = [];
    //handoff from factory
//.getNewsAbcNewsAu()
    newService.getNews().then(function(resultOfPromise) {
        $scope.displayedNewsPromise = resultOfPromise;

        console.log($scope.displayedNewsPromise);

    });
    newService.getNewsAbcNewsAu().then(function(resultOfPromise) {
        $scope.displayedNewsPromise = $scope.displayedNewsPromise.concat(resultOfPromise);

        console.log($scope.displayedNewsPromise);

    });
    newService.getNewsArsTech().then(function(resultOfPromise) {
        $scope.displayedNewsPromise = $scope.displayedNewsPromise.concat(resultOfPromise);

        console.log($scope.displayedNewsPromise);

    });
    // emailjs.send("mailjet","template_Fj79lA9W",{name: "James", notes: "Check this out!"})
    // .then(function(response) {
    //    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    // }, function(err) {
    //    console.log("FAILED. error=", err);
    // });
    //
    // $scope.displayedNews = newService.getNews();
    // console.log($scope.displayedNews);


});
