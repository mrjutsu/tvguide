'use strict';

describe('Controller: PeopleShowCtrl', function () {

  // load the controller's module
  beforeEach(module('tvguideApp'));

  var PeopleShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PeopleShowCtrl = $controller('PeopleShowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PeopleShowCtrl.awesomeThings.length).toBe(3);
  });
});
