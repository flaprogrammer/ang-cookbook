app = angular.module('cookbookApp', [])

app.controller 'MainController', ($scope) ->

app.directive 'digitalClock', ($interval) ->
	return {
		restrict: 'E',
		scope: {},
		template: '<div>{{now | date:\'HH:mm:ss\'}}</div>',
		link: (scope) ->
			scope.now = new Date()
			clockTimer = $interval(->
				scope.now = new Date()
			, 1000)

			scope.$on '$destroy', ->
				$interval.cancel(clockTimer)
	};