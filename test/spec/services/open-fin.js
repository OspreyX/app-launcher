'use strict';

describe('Service: openFin', function () {

  // load the service's module
  beforeEach(module('appLauncherApp'));

  // instantiate service
  var openFin;
  beforeEach(inject(function (_openFin_) {
    openFin = _openFin_;
  }));

  it('should do something', function () {
    expect(!!openFin).toBe(true);
  });

});
