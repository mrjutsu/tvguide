'use strict';

describe('Service: ShowDetail', function () {

  // load the service's module
  beforeEach(module('tvguideApp'));

  // instantiate service
  var ShowDetail;
  beforeEach(inject(function (_ShowDetail_) {
    ShowDetail = _ShowDetail_;
  }));

  it('should do something', function () {
    expect(!!ShowDetail).toBe(true);
  });

});
