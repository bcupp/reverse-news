var app = angular.module('myMod');


app.controller('controller1', function($scope, newService, $location, $sce) {
    //handoff from factory
    var newsFeed;

    newService.getNews().then(function(resultOfPromise) {
        newsFeed = resultOfPromise;
        newsArray($location.search().q);
    });
    newService.getNewsAbcNewsAu().then(function(resultOfPromise) {
        newsFeed = newsFeed.concat(resultOfPromise);
        newsArray($location.search().q);
    });
    newService.getNewsArsTech().then(function(resultOfPromise) {
        newsFeed = newsFeed.concat(resultOfPromise);
        newsArray($location.search().q);
    });


    //sends article url to service which then sends it so server and runs it through readbility
    $scope.viewArticle = function(url, myModal) {
        $scope.wholeArticle = '';
        newService.getReadability(url).then(function(response) {
            var temp = newService.returnArticle();
            $scope.wholeArticle = $sce.trustAsHtml(temp);
        });
    };



    function newsArray(userInput) {
        var reverseFilter = [];
        var normFilter = [];
        if (newsFeed === undefined){
          return;
        }
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

    };

    $scope.userSearchReverse = function(userInput) {
        //only changes the view
        $location.path('/reverseFilter');
        $location.search('q', userInput);

    };

    $scope.userSearchNorm = function(userInput) {
        //only changes view now
        $location.path('/normalFilter');
        $location.search('q', userInput);

    };

$scope.$on('$locationChangeSuccess', function(){


    //grab property out of it
    console.log($scope.userInput = $location.search().q);
    newsArray($location.search().q);
    $(".jumbotron").slideUp("medium", function(){ $target.remove(); });
    //$(".jumbotron").remove();
    //$(".jumbotron").remove();
    console.log("jazz");
});


//email how will the presistent link work?
$scope.sendEmail = function (userEmail) {
  emailjs.send("mailjet","template_Fj79lA9W",
  {sentName:"THE PROJECT",
  userAddress: userEmail,
  notes: "Your link: "+ location.href})
  //based on the page it's on
  //could send both but what if they only wanted one?
  //
  .then(function(response) {
     console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
  }, function(err) {
     console.log("FAILED. error=", err);
  });
  console.log(userEmail);
};

});
