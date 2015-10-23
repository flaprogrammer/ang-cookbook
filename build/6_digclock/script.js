var app;

app = angular.module('cookbookApp', []);

app.controller('MainController', function($scope) {});

app.directive('digitalClock', function($interval) {
  return {
    restrict: 'E',
    scope: {},
    template: '<div>{{now | date:\'HH:mm:ss\'}}</div>',
    link: function(scope) {
      var clockTimer;
      scope.now = new Date();
      clockTimer = $interval(function() {
        return scope.now = new Date();
      }, 1000);
      return scope.$on('$destroy', function() {
        return $interval.cancel(clockTimer);
      });
    }
  };
});
