(function(angular, undefined) {
	'use strict';
	var app = angular.module('nerdamigo.urlStateHelper', []);

	app.service('$urlStateHelper', [function () {
		var $urlStateHelperService = this;

		$urlStateHelperService.help = function () {
			return 'hi';
		}; 

		return $urlStateHelperService;
	}]);
})(angular);