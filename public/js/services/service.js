var app = angular.module('myMod');

app.factory('newService', function($http) {

    //readability container
    var articleContent;
    //array to returns with news items
    var newsQueue = [];
    //returning all the functions within service
    return {
        getNewsTechCrunch: getNewsTechCrunch,
        getNewsAbcNewsAu: getNewsAbcNewsAu,
        getNewsArsTech: getNewsArsTech,
        getReadability: getReadability,
        returnArticle: returnArticle
    }

    //Makes call to newsAPI for techcrunch
    function getNewsTechCrunch() {
        var promise = $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=7d72f4db8ee04e39a305e785477b413b'
        }).then(function sucessfullCallback(response) {
            return newsQueue = response.data.articles;
        });
        return promise;
    };

    //Makes call to newsAPI for abc-news-au
    function getNewsAbcNewsAu() {
        var promise = $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=abc-news-au&apiKey=7d72f4db8ee04e39a305e785477b413b'
        }).then(function sucessfullCallback(response) {
            return newsQueue = response.data.articles;
        });
        return promise;
    };

    //Makes call to newsAPI for ArsTech
    function getNewsArsTech() {
        var promise = $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=ars-technica&apiKey=7d72f4db8ee04e39a305e785477b413b'
        }).then(function sucessfullCallback(response) {
            return newsQueue = response.data.articles;
        });
        return promise;
    };

    //Makes call to readability in the server
    function getReadability(url) {
        var urlObj = {
            url: url
        }
        var promise = $http({
            method: 'POST',
            url: '/get-readability',
            data: urlObj
        }).then(function sucessfullCallback(response) {
            articleContent = response.data;
        });
        return promise;
    };

//New test with pocket
// function getPocket() {
//     var promise = $http({
//         method: 'POST',
//         Host: getpocket.com,
//         url: 'https://getpocket.com/v3/oauth/request',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//        data: {"consumer_key":"64786-b84711b4b7ccdaec59496d52",
//        "redirect_uri":"pocketapp1234:authorizationFinished",
//        'X-Accept': "application/json"
//         }
//     }).then(function sucessfullCallback(response) {
//         //return newsQueue = response.data.articles;
//         console.log("Oh hi");
//     });
//     return promise;
// };
//POST /v3/oauth/request HTTP/1.1






    //Makes call to return the article controller
    function returnArticle() {
        return articleContent;
    };
});
