var app = angular.module('demoApp', ['ui.router']);

app.config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
	$locationProvider.html5Mode(true);

	$stateProvider.state('home', {
		url: '/',
		views: {
			'root': {
				templateUrl: 'app/home/home.html',
				controller: ['$scope', '$state', function ($scope, $state) {
					$scope.test = new Date();
				}]
			}
		}
	})
}])