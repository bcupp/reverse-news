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
        var userInputMultiple = [];
        //removing spaces off the ends
        userInputMultiple = userInput.trim();
        //within teh string replase multiple spaces with one
        userInputMultiple = userInputMultiple.replace(/\s+/g,' ');
        //split by , and any number of spaces
        userInputMultiple = userInputMultiple.split(/\s*,\s*/);
        console.log(userInputMultiple);
        //checks if userInput is seperates by spaces or by commas
        if (newsFeed === undefined) {
            return;
        }
        //come back to the idea to search by spaces as well as commas

        newsFeed.forEach(function(article) {
            //Spilting articles into arrays based on what searched on using regular expression to search WITH case sensitive search
            //maybe do a repeat to do as many as the user wants?

              var i = 0;
              var newArray = [];
             newArray[i] = article.title.search(new RegExp(userInputMultiple[i], "i"));
              console.log(userInputMultiple[1]);
            if (userInputMultiple[i] == undefined) {
                if (newArray[i] > -1) {
                    normFilter.push(article);
                } else {
                    reverseFilter.push(article);
                };

            } else
            if (userInputMultiple[i] !== ''){

            if (newArray.forEach(function(comparison){
                if (comparison > -1){
                    normFilter.push(article);

                } else {
                    reverseFilter.push(article);

                };
              }));
                }
                  i++;
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
    $scope.$on('$locationChangeSuccess', function() {

        //Runs news array function with search parameter
        newsArray($location.search().q);

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


                //for closing modal
              $('#emailModal').modal('toggle');
            }, function(err) {
                console.log("FAILED. error=", err);

                //for closing modal
                $('#emailModal').modal('toggle');
            });

        console.log(userEmail);
    };

});
