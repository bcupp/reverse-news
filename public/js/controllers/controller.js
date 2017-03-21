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
    // $scope.next = function(reverseFilter, index){
    //   if((index + 1) > (reverseFilter.length - 1)){
    //     return;
    //   }else{
    //     reverseFilter.show = false;
    //     reverseFilter[index+1].show = true;
    //   }
    // }

    // $scope.viewNextArticle = function(myModal){
    //   var next = newService.returnArticle();
    //   for (next = 0; next > $scope.viewArticle.length; ++1 ){
    //     console.log('hi there');
    //   }
    // }
//
//     $scope.nextViewArticle = function(url, myModal) {
//       newService.getReadability(url).then(function(response) {
//           var next = newService.returnArticle(
//           for (next = 0; next > $scope.viewArticle.length; ++ 1 ){
//             console.log('hi there');
//     )}  $scope.wholeArticle = $sce.trustAsHtml(temp);
//   )};
// };




      // if(($scope.viewArticle + 1) > ($scope.viewArticle.length - 1)){
      //   return;
      // } else{
      //   viewArticle.show = false;
      //   $scope.viewArticle[$scope.viewArticle+1].show = true;
      // }
      // };
    //Search filter functionality
    function newsArray(userInput) {
        var reverseFilter = [];
        var normFilter = [];
        if (newsFeed === undefined){
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
