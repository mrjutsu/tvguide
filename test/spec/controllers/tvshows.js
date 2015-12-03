'use strict';

describe('Controller: TvshowsCtrl', function () {

  // load the controller's module
  beforeEach(module('tvguideApp'));

  var TvshowsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TvshowsCtrl = $controller('TvshowsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TvshowsCtrl.awesomeThings.length).toBe(3);
  });
});
