var app = angular.module('myMod');

app.factory('newService', function($http) {

    //array to returns with news items
    var newsQueue = [];
    return {
        getNews: getNews,
        getNewsAbcNewsAu: getNewsAbcNewsAu,
        getNewsArsTech: getNewsArsTech,
        getReadability: getReadability
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
      console.log('post function run');
      var url2 = {
            url: 'https://techcrunch.com/2017/03/14/reid-hoffman-joins-microsoft-board/'
            }
      var promise = $http({
        method: 'POST',
        url:'/get-readability',
        data: url2
      }).then(function sucessfullCallback(response){
        var scrubbed = response.data;
        console.log(scrubbed);
        // return scrubbed;
      });
    };






});
