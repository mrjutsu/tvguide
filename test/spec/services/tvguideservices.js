'use strict';

describe('Service: TVGuideServices', function () {

  // load the service's module
  beforeEach(module('tvguideApp'));

  // instantiate service
  var TVGuideServices;
  beforeEach(inject(function (_TVGuideServices_) {
    TVGuideServices = _TVGuideServices_;
  }));

  it('should do something', function () {
    expect(!!TVGuideServices).toBe(true);
  });

});
