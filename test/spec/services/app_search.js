'use strict';

describe('Service: appSearch', function () {

  // load the service's module
  beforeEach(module('appLauncherApp'));

  // instantiate service
  var appSearch;
  beforeEach(inject(function (_appSearch_) {
    appSearch = _appSearch_;
  }));

  it('should do something', function () {
    expect(!!appSearch).toBe(true);
  });

});
