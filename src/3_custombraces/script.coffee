app = angular.module('cookbookApp', [])

app.config ($interpolateProvider) ->
	$interpolateProvider.startSymbol('[[')
	$interpolateProvider.endSymbol(']]')

app.controller 'MainController', ($scope) ->
	$scope.text = 'hello'