'use strict';

describe('urlStateHelper', function () {
	var scope;

	beforeEach(angular.mock.module('nerdamigo.urlStateHelper'));
	it('should contain $urlStateHelper', angular.mock.inject(['$urlStateHelper', function (u) {
		expect(u).not.toEqual(null);
	}]));
	
	it('should say hi', inject(['$urlStateHelper', function ($urlStateHelper) {
		expect($urlStateHelper.help()).toBe('hi');
	}]));

});