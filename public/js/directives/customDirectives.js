var app = angular.module('myMod');

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
    templateUrl:"partials/jumbotron.html",
    controller: function(){
      $('.carousel').carousel({
        interval: 5000,
        cycle: true
      });
    }
  };
});

app.directive('toggleView', function(){
  return{
    restrict:'EA',
    replace: true,
    templateUrl:"partials/toggleView.html"
  };
});

app.directive('searchNav', function(){
  return{
    restrict:'EA',
    replace: true,
    templateUrl:"partials/searchNav.html"
  };
});

app.directive('spacer', function(){
  return{
    restrict:'EA',
    replace: true,
    templateUrl:"partials/spacer.html"
  };
});

app.directive('bottomFooter', function(){
  return{
    restrict:'EA',
    replace: false,
    templateUrl:"partials/bottomFooter.html"
  };
});
