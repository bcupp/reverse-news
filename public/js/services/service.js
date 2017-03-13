var app = angular.module('myMod');

app.factory('newService', function($http){

//array to returns with news items
var newsQueue = [];
return{
  getNews:getNews
}

function returnNews(){
  return newsQueue;
}
//call to newsAPI
function getNews() {
var promise = $http({
  method:'GET',
  url: 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=7d72f4db8ee04e39a305e785477b413b'
}).then(function sucessfullCallback(response){
  console.log(response.data);
  return newsQueue = response.data.articles;
});
return promise;
}


});
