'use strict';

describe('Directive: appBody', function () {

  // load the directive's module
  beforeEach(module('appLauncherApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // it('should make hidden element visible', inject(function ($compile) {
  //   element = angular.element('<app-body></app-body>');
  //   element = $compile(element)(scope);
  //   expect(element.text()).toBe('this is the appBody directive');
  // }));
});
