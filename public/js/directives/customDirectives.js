var app = angular.module('myMod', []);

app.directive('reverseFilterContent', function(){
  return{
    restrict:'EA',
    replace: false,
    templateUrl:"partials/reverseFilter.html"
  };
});

app.directive('normalFilterContent', function(){
  return{
    restrict:'EA',
    replace: false,
    templateUrl:"partials/normalFilter.html"
  };
});

app.directive('jumbotron', function(){
  return{
    restrict:'EA',
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
