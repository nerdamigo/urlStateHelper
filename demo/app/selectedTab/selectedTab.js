app.config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
	$locationProvider.html5Mode(true);

	$stateProvider.state('demo.selectedTab', {
		url: '/selected-tab',
		views: {
			'': {
				templateUrl: 'app/selectedTab/selectedTab.html',
				controller: ['$scope', '$state', '$urlStateHelper', function ($scope, $state, $urlStateHelper) {
					$urlStateHelper.register($scope, 'currentTab');
				}]
			}
		}
	});
}]);