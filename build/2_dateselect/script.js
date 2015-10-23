var app;

app = angular.module('cookbookApp', []);

app.directive('dateselect', function() {
  return {
    restrict: 'E',
    template: "<select ng-model=\"date.month\"\nng-options=\"month for month in months\"></select>\n<select ng-model=\"date.day\"\nng-options=\"day for day in days\"></select>\n<select ng-model=\"date.year\"\nng-options=\"year for year in years\"></select>",
    scope: {
      model: '='
    },
    controller: function($scope) {
      var i, j, k, l, ref;
      $scope.date = {};
      $scope.days = [];
      for (i = j = 1; j <= 31; i = ++j) {
        $scope.days.push(i);
      }
      $scope.months = [];
      for (i = k = 1; k <= 12; i = ++k) {
        $scope.months.push(i);
      }
      $scope.years = [];
      for (i = l = 1980, ref = new Date().getFullYear(); 1980 <= ref ? l <= ref : l >= ref; i = 1980 <= ref ? ++l : --l) {
        $scope.years.push(i);
      }
      $scope.$watch('model', function(newDate) {
        $scope.date.month = newDate.getMonth() + 1;
        $scope.date.day = newDate.getDate();
        return $scope.date.year = newDate.getFullYear();
      }, true);
      return $scope.$watch('date', function(newDate) {
        $scope.model.setDate(newDate.day);
        $scope.model.setMonth(newDate.month - 1);
        return $scope.model.setFullYear(newDate.year);
      }, true);
    }
  };
});

app.controller('MainController', function($scope) {
  return $scope.current = new Date();
});
