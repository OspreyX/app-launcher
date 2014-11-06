'use strict';

describe('Service: sharedContext', function () {

  // load the service's module
  beforeEach(module('appLauncherApp'));

  // instantiate service
  var sharedContext;
  beforeEach(inject(function (_sharedContext_) {
    sharedContext = _sharedContext_;
  }));

  it('should do something', function () {
    expect(!!sharedContext).toBe(true);
  });

});
