app = angular.module('cookbookApp', [])


app.directive 'dateselect', ->
	return {
		restrict: 'E'
		template:
			"""<select ng-model="date.month"
			ng-options="month for month in months"></select>
			<select ng-model="date.day"
			ng-options="day for day in days"></select>
			<select ng-model="date.year"
			ng-options="year for year in years"></select>"""
		scope : {
			model: '='
		}
		controller: ($scope) ->
			$scope.date = {}

			$scope.days = []
			$scope.days.push(i) for i in [1..31]

			$scope.months = []
			$scope.months.push(i) for i in [1..12]
			$scope.years = [];

			$scope.years.push(i) for i in [1980..(new Date().getFullYear())]

			$scope.$watch('model', (newDate) ->
				$scope.date.month = newDate.getMonth()+1
				$scope.date.day = newDate.getDate()
				$scope.date.year = newDate.getFullYear()
			, true)

			$scope.$watch('date', (newDate) ->
				$scope.model.setDate(newDate.day)
				$scope.model.setMonth(newDate.month-1)
				$scope.model.setFullYear(newDate.year)
			, true)

	};


app.controller 'MainController', ($scope) ->
	$scope.current = new Date()