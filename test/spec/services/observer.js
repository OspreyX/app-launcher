'use strict';
window.fin = {
  desktop: {
    main: function(){}
  }
};


describe('Service: observer', function () {

  // load the service's module
  beforeEach(module('appLauncherApp'));

  // instantiate service
  var observer;
  beforeEach(inject(function (_observer_) {
    observer = _observer_;
  }));

  it('should have a createObserver function', function () {
    console.log(observer);
    console.dir(observer);
    expect(observer.createObserver).toBeDefined();
  });

  describe('createObserver',function(){
    var observer, observerInstance;
    beforeEach(inject(function (_observer_) {
      observer = _observer_;
      observerInstance = observer.createObserver({
        uuid: 'asdf'
      });
    }));

    it('should produce an observable object with an update method',function(){
      expect(observerInstance.update).toBeDefined();
    });
  });


});
