var app = angular.module('myMod');

app.factory('newService', function($http) {

    //array to returns with news items
    var newsQueue = [];
    return {
        getNews: getNews,
        getNewsAbcNewsAu: getNewsAbcNewsAu,
        getNewsArsTech: getNewsArsTech
        //could be more
    }

    //call to newsAPI

    function getNews() {
        var promise = $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=7d72f4db8ee04e39a305e785477b413b'
        }).then(function sucessfullCallback(response) {
            return newsQueue = response.data.articles;
        });
        return promise;
    }

    function getNewsAbcNewsAu() {
        var promise = $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=abc-news-au&apiKey=7d72f4db8ee04e39a305e785477b413b'
        }).then(function sucessfullCallback(response) {
            return newsQueue = response.data.articles;
        });
        return promise;
    }

    function getNewsArsTech() {
        var promise = $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=ars-technica&apiKey=7d72f4db8ee04e39a305e785477b413b'
        }).then(function sucessfullCallback(response) {
            return newsQueue = response.data.articles;
        });
        return promise;
    }

    function getReadability() {
      var promise = $http({
        method: 'GET',
        url:'/get-readability',
        data:'https://techcrunch.com/2017/03/14/reid-hoffman-joins-microsoft-board/'
      }).then(function sucessfullCallback(response){
        console.log(response);
        var scrubbed = response;
        // return scrubbed;
      });
    };




});
