var app = angular.module('myMod');

// Primary Controller - injecting $scope, newService(factory), $location, $sce(ng-bind to let it know that the code was safe)
app.controller('controller1', function($scope, newService, $location, $sce) {
    //Array holding all news articles from Service Call
    var newsFeed;
    // Service call to get results from Tech Crunch
    newService.getNewsTechCrunch().then(function(resultOfPromise) {
        newsFeed = resultOfPromise;
        newsArray($location.search().q);
    });
    // Service call to get results from ABC News AU
    newService.getNewsAbcNewsAu().then(function(resultOfPromise) {
        newsFeed = newsFeed.concat(resultOfPromise);
        newsArray($location.search().q);
    });
    // Service call to get results from Ars Tech
    newService.getNewsArsTech().then(function(resultOfPromise) {
        newsFeed = newsFeed.concat(resultOfPromise);
        newsArray($location.search().q);
    });

    //sends article url to service which then sends it so server and runs it through readbility and returns it to modal
    $scope.viewArticle = function(url, myModal) {
        $scope.wholeArticle = '';
        newService.getReadability(url).then(function(response) {
            var temp = newService.returnArticle();
            $scope.wholeArticle = $sce.trustAsHtml(temp);
        });
    };

    //Search filter functionality
    function newsArray(userInput) {
        var reverseFilter = [];
        var normFilter = [];
        //Eric Add
        var userInputMultiple = [];
        userInputMultiple = userInput.split(',');
        //
        if (newsFeed === undefined){
          return;
        }
        newsFeed.forEach(function(article) {
            //Spilting articles into arrays based on what searched on using regular expression to search WITH case sensitive search
            //maybe do a repeat to do as many as the user wants?
            var n = article.title.search(new RegExp(userInputMultiple[0], "i"));
            var j = article.title.search(new RegExp(userInputMultiple[1], "i"));
            console.log(n); // should have been able to use | but it didn't work
            console.log(j);

            if (userInputMultiple[1] == ''){
              if (n > -1) {
                  normFilter.push(article);
              } else {
                  reverseFilter.push(article);
              };

            } else if (userInputMultiple[1] !== '')
            if (n > -1 || j > -1) {
                normFilter.push(article);
            } else {
                reverseFilter.push(article);
            };
        }); //it's keeping only two instead of the whole list

        //Returning object with both search arrays results
        $scope.news = {
            reverseFilter: reverseFilter,
            normFilter: normFilter
        };
    };

    //Change view AND display query in URL for reverseFilter
    $scope.userSearchReverse = function(userInput) {
        //only changes the view
        $location.path('/reverseFilter');
        $location.search('q', userInput);
    };

    //Change view AND display query in URL for normalFilter
    $scope.userSearchNorm = function(userInput) {
        //only changes view now
        $location.path('/normalFilter');
        $location.search('q', userInput);
    };

    //Display results on selected view
    $scope.$on('$locationChangeSuccess', function(){

    //Runs news array function with search parameter
    newsArray($location.search().q);

    //When page switch remove jumbotron
    $(".jumbotron").slideUp("medium", function(){ $target.remove(); });
    });

    //Email
    $scope.sendEmail = function (userEmail) {
    emailjs.send("mailjet","template_Fj79lA9W",

    //Templating email
    {sentName:"REVUN",
    userAddress: userEmail,
    notes: "Your link: "+ location.href})

    //console.log to see if it goes through
    .then(function(response) {
       console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function(err) {
       console.log("FAILED. error=", err);
    });
       console.log(userEmail);
    };

});
