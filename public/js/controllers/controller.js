var app = angular.module('myMod');

app.controller('controller1', function($scope, newService, $location) {
    $scope.displayedNewsPromise = [];
    //handoff from factory
//.getNewsAbcNewsAu()

    var newsFeed;

    newService.getNews().then(function(resultOfPromise) {
        $scope.displayedNewsPromise = resultOfPromise;

        console.log($scope.displayedNewsPromise);

    });
    newService.getNewsAbcNewsAu().then(function(resultOfPromise) {
        $scope.displayedNewsPromise = $scope.displayedNewsPromise.concat(resultOfPromise);

        console.log($scope.displayedNewsPromise);
        newsFeed = resultOfPromise;
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

    function newsArray(userInput) {
        var reverseFilter = [];
        var normFilter = [];

        newsFeed.forEach(function(article) {
            var n = article.title.search(new RegExp(userInput, "i"));
            if (n > -1) {
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

    $scope.userSearchReverse = function(userInput) {
        newsArray(userInput);
        $location.path('/reverseFilter');
    };

    $scope.userSearchNorm = function(userInput) {
        newsArray(userInput);
        $location.path('/normalFilter');
    };



});
