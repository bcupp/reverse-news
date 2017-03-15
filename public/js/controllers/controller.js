var app = angular.module('myMod');

app.controller('controller1', function($scope, newService, $location) {
    //handoff from factory
    var newsFeed;

    newService.getNews().then(function(resultOfPromise) {
        newsFeed = resultOfPromise;
    });
    newService.getNewsAbcNewsAu().then(function(resultOfPromise) {
        newsFeed = newsFeed.concat(resultOfPromise);
    });
    newService.getNewsArsTech().then(function(resultOfPromise) {
        newsFeed = newsFeed.concat(resultOfPromise);
    });


//sends article url to service which then sends it so server and runs it through readbility
    $scope.viewArticle = function(url, myModal){
      $scope.wholeArticle = '';
      console.log(url);
      console.log(myModal);
      newService.getReadability(url).then(function (response){
        var temp = newService.returnArticle();
        $scope.wholeArticle = $.parseHTML(temp);
        console.log($scope.wholeArticle);
      });
          // $(myModal).modal();
    };




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
        $("#jumboId").remove();
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
