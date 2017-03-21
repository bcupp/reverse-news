var app = angular.module('myMod');

// Primary Controller - injecting $scope, newService(factory), $location, $sce(ng-bind to let it know that the code was safe)
app.controller('controller1', function($scope, newService, $location, $sce) {
    //Array holding all news articles from Service Call
    var newsFeed;
    //initialized currentView to be used in the toggleView view as a ng-class
    $scope.currentView = '';

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
        if (newsFeed === undefined) {
            return;
        }
        newsFeed.forEach(function(article) {
            //Spilting articles into arrays based on what searched on using regular expression to search WITH case sensitive search
            var n = article.title.search(new RegExp(userInput, "i"));
            if (n > -1) {
                normFilter.push(article);
            } else {
                reverseFilter.push(article);
            };
        });

        //Returning object with both search arrays results
        $scope.news = {
            reverseFilter: reverseFilter,
            normFilter: normFilter
        };
    };
    //change view with view buttons
    $scope.normalSelect = function() {
        $location.path('/normalFilter');
    };
    //change view with view buttons
    $scope.reverseSelect = function() {
        $location.path('/reverseFilter');
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
    $scope.$on('$locationChangeSuccess', function() {

        //Runs news array function with search parameter
        newsArray($location.search().q);

        //sets $scope.currentView to be used in toggleView view as selected class based off url path to show selected button
        if ($location.$$path == '/normalFilter') {
            $scope.currentView = 'normalFilter';
        }
        //sets $scope.currentView to be used in toggleView view as selected class based off url path to show selected button
        if ($location.$$path == '/reverseFilter') {
            $scope.currentView = 'reverseFilter';
        }
        console.log($location.$$path);

        //When page switch remove jumbotron
        $(".jumbotron").slideUp("medium", function() {
            $target.remove();
        });
    });

    //Email
    $scope.sendEmail = function(userEmail) {
        emailjs.send("mailjet", "template_Fj79lA9W",

                //Templating email
                {
                    sentName: "REVUN",
                    userAddress: userEmail,
                    notes: "Your link: " + location.href
                })

            //console.log to see if it goes through
            .then(function(response) {
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
                console.log("FAILED. error=", err);
            });
        console.log(userEmail);
    };

});
