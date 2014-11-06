'use strict';

describe('Service: includedApplications', function () {

  // load the service's module
  beforeEach(module('appLauncherApp'));

  // instantiate service
  var includedApplications;
  beforeEach(inject(function (_includedApplications_) {
    includedApplications = _includedApplications_;
  }));

  it('should do something', function () {
    expect(!!includedApplications).toBe(true);
  });

});
