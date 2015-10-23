var app;

app = angular.module('cookbookApp', []);

app.controller('MainController', function($scope, $interval) {
  var calculateRotation;
  calculateRotation = function() {
    var now;
    now = new Date();
    $scope.hourRotation = 360 * now.getHours() / 12;
    $scope.minuteRotation = 360 * now.getMinutes() / 60;
    return $scope.secondRotation = 360 * now.getSeconds() / 60;
  };
  $interval(calculateRotation, 1000);
  return calculateRotation();
});
