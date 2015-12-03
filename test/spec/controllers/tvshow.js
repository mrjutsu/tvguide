'use strict';

describe('Controller: TvshowCtrl', function () {

  // load the controller's module
  beforeEach(module('tvguideApp'));

  var TvshowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TvshowCtrl = $controller('TvshowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TvshowCtrl.awesomeThings.length).toBe(3);
  });
});
