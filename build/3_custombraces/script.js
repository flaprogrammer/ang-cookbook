var app;

app = angular.module('cookbookApp', []);

app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  return $interpolateProvider.endSymbol(']]');
});

app.controller('MainController', function($scope) {
  return $scope.text = 'hello';
});
