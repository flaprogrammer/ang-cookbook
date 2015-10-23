var app;

app = angular.module('cookbookApp', []);

app.directive('confirmedClick', function($parse, $q, $compile, $rootScope) {
  var box;
  box = "<div class=\"box\"><div>Really?</div>\n<button ng-click=\"close($event, true)\">OK</button>\n<button ng-click=\"close($event)\">Cancel</button>\n</div>";
  return {
    link: function(scope, element, attrs) {
      var fn;
      fn = $parse(attrs.confirmedClick);
      return element.on('click', function() {
        var boxElement, boxScope;
        boxScope = $rootScope.$new();
        boxElement = $compile(box)(boxScope);
        element.attr('disabled', 'disabled');
        element.append(boxElement);
        return boxScope.close = function(event, execute) {
          event.stopPropagation();
          element.removeAttr('disabled');
          boxElement.remove();
          if (execute) {
            return fn(scope, {
              $event: event
            });
          }
        };
      });
    }
  };
});

app.controller('MainController', function($scope) {
  $scope.tasks = ['Tidy up', 'Wash the dishes'];
  return $scope.removeTask = function(index) {
    return $scope.tasks.splice(index, 1);
  };
});
