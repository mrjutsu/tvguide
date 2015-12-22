'use strict';

describe('Directive: phoneHeader', function () {

  // load the directive's module
  beforeEach(module('tvguideApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<phone-header></phone-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the phoneHeader directive');
  }));
});
