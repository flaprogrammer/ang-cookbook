app = angular.module('cookbookApp', [])


app.directive 'confirmedClick', ($parse, $q, $compile, $rootScope) ->
	box = """<div class="box"><div>Really?</div>
		<button ng-click="close($event, true)">OK</button>
		<button ng-click="close($event)">Cancel</button>
		</div>"""
	return link: (scope, element, attrs) ->
			fn = $parse(attrs.confirmedClick)
			element.on 'click', ->
				boxScope = $rootScope.$new()
				boxElement = $compile(box)(boxScope)

				element.attr('disabled', 'disabled')
				element.append(boxElement)

				boxScope.close = (event, execute) ->
					event.stopPropagation()
					element.removeAttr('disabled')
					boxElement.remove()
					if (execute) then fn(scope, {$event: event})


app.controller 'MainController', ($scope) ->
	$scope.tasks = ['Tidy up', 'Wash the dishes']
	$scope.removeTask = (index) ->
		$scope.tasks.splice(index, 1)