(function(angular, undefined) {
	'use strict';
	var app = angular.module('nerdamigo.urlStateHelper', []);

	app.service('$urlStateHelper', [function () {
		var $urlStateHelperService = this;

		$urlStateHelperService.unregister = function (aParameter) {
			console.log('Unregistering ' + aParameter);
		};

		$urlStateHelperService.register = function ($scope, aParameter) {
			$scope.$on('$destroy', function () { $urlStateHelperService.unregister(aParameter); });
		}; 

		return $urlStateHelperService;
	}]);
})(angular);