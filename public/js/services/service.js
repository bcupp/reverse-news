var app = angular.module('myMod');

app.factory('newService', function($http) {
    //readability container
    var articleContent;

    //array to returns with news items
    var newsQueue = [];

    //returning all the functions within service
    return {
        getNewsArsTech: getNewsArsTech,
        getNewsFour:getNewsFour,
        getNewsScientist:getNewsScientist,
        getNewsTechCrunch: getNewsTechCrunch,
        getNewsGuardianAu: getNewsGuardianAu,
        getNewsGuardianUk: getNewsGuardianUk,
        getNewsNextWeb: getNewsNextWeb,
        getNewsWallStreet: getNewsWallStreet,
        getNewsWapo: getNewsWapo,
        getReadability: getReadability,
        returnArticle: returnArticle
    }



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
    //Makes call to newsAPI for four-four-two
    function getNewsFour() {
        var promise = $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=four-four-two&apiKey=7d72f4db8ee04e39a305e785477b413b'
        }).then(function sucessfullCallback(response) {
            return newsQueue = response.data.articles;
        });
        return promise;
    };
    //Makes call to newsAPI for new-scientist
    function getNewsScientist() {
        var promise = $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=new-scientist&apiKey=7d72f4db8ee04e39a305e785477b413b'
        }).then(function sucessfullCallback(response) {
            return newsQueue = response.data.articles;
        });
        return promise;
    };
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
    //Makes call to newsAPI for the-guardian-au
    function getNewsGuardianAu() {
        var promise = $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=the-guardian-au&apiKey=7d72f4db8ee04e39a305e785477b413b'
        }).then(function sucessfullCallback(response) {
            return newsQueue = response.data.articles;
        });
        return promise;
    };
    //Makes call to newsAPI for the-guardian-uk
    function getNewsGuardianUk() {
        var promise = $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=the-guardian-uk&apiKey=7d72f4db8ee04e39a305e785477b413b'
        }).then(function sucessfullCallback(response) {
            return newsQueue = response.data.articles;
        });
        return promise;
    };
    //Makes call to newsAPI for the-next-web
    function getNewsNextWeb() {
        var promise = $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=the-next-web&apiKey=7d72f4db8ee04e39a305e785477b413b'
        }).then(function sucessfullCallback(response) {
            return newsQueue = response.data.articles;
        });
        return promise;
    };
    //Makes call to newsAPI for the-wall-street-journal
    function getNewsWallStreet() {
        var promise = $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=the-wall-street-journal&apiKey=7d72f4db8ee04e39a305e785477b413b'
        }).then(function sucessfullCallback(response) {
            return newsQueue = response.data.articles;
        });
        return promise;
    };
    //Makes call to newsAPI for the-washington-post
    function getNewsWapo() {
        var promise = $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=the-washington-post&apiKey=7d72f4db8ee04e39a305e785477b413b'
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

    //Makes call to return the article controller
    function returnArticle() {
        return articleContent;
    };


});
