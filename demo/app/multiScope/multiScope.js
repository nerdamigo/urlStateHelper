app.config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
	$locationProvider.html5Mode(true);

	$stateProvider.state('demo.multiScope', {
		url: '/multi-scope',
		views: {
			'': {
				templateUrl: 'app/multiScope/multiScope.html',
				controller: ['$scope', '$state', '$urlStateHelper', function ($scope, $state, $urlStateHelper) {
					$urlStateHelper.register($scope, 'multiScope');
				}]
			}
		}
	});
}]);