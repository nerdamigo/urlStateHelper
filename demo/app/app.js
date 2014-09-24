var app = angular.module('demoApp', ['ui.router', 'nerdamigo.urlStateHelper']);

app.config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
	$locationProvider.html5Mode(true);

	$stateProvider.state('home', {
		url: '/',
		views: {
			'': {
				templateUrl: 'app/home/home.html',
				controller: ['$scope', '$state', function ($scope, $state) {

				}]
			}
		}
	});

	$stateProvider.state('demo', {
		url: '/demo',
		abstract: true,
		views: {
			'': {
				template: '<div ui-view>huh?</div>'
			}
		}
	});
}]);