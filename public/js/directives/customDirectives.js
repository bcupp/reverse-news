var app = angular.module('myMod', []);

app.directive('contentBlock', function(){
  return{
    restrict:'EACM',
    replace: false,
    templateUrl:"partials/contentBlock.html"
  };
});

app.directive('jumbotron', function(){
  return{
    restrict:'EAC',
    replace: true,
    templateUrl:"partials/jumbotron.html"
  };
});

app.directive('searchNav', function(){
  return{
    restrict:'EAC',
    replace: true,
    templateUrl:"partials/searchNav.html"
  };
});

app.directive('spacer', function(){
  return{
    restrict:'EAC',
    replace: true,
    templateUrl:"partials/spacer.html"
  };
});

app.directive('bottomFooter', function(){
  return{
    restrict:'EACM',
    replace: false,
    templateUrl:"partials/bottomFooter.html"
  };
});
