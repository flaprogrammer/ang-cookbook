app = angular.module('cookbookApp', [])

app.controller 'MainController', ($scope, $interval) ->

	calculateRotation = ->
		now = new Date()
		$scope.hourRotation = 360 * now.getHours() / 12
		$scope.minuteRotation = 360 * now.getMinutes() / 60
		$scope.secondRotation = 360 * now.getSeconds() / 60

	$interval(calculateRotation, 1000)

	calculateRotation()