var app = angular.module('myMod');


app.directive('DIRECTIVE NAME HERE', function(){
  return {
    restrict:'EA',
    templateUrl:'views/DIRECTIVE NAME HERE.html',
    replace: false
  };
});
