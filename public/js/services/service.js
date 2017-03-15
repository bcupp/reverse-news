var app = angular.module('myMod');

app.factory('newService', function($http) {

    //array to returns with news items
    var articleContent;
    var newsQueue = [];
    return {
        getNews: getNews,
        getNewsAbcNewsAu: getNewsAbcNewsAu,
        getNewsArsTech: getNewsArsTech,
        getReadability: getReadability,
        returnArticle: returnArticle
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



    function getReadability(url) {
      console.log('post function run');
      var urlObj = {
            url: url
            }
      var promise = $http({
        method: 'POST',
        url:'/get-readability',
        data: urlObj
      }).then(function sucessfullCallback(response){
        articleContent = response.data;
        console.log(articleContent);
      });
      return promise;
    };

    function returnArticle() {
      return articleContent;
    }






});
