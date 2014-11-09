
'use strict';

/**
 * @ngdoc service
 * @name appLauncherApp.subscriptionManager
 * @description
 * # subscriptionManager
 * Service in the appLauncherApp.
 */
angular.module('appLauncherApp')
 .service('subscriptionManager', function subscriptionManager(openFin, observer, sharedContext) {
  console.log('subscribing...');
  openFin.whenReady(function(){
    console.log('subscribing...AGAIN');
    openFin.fin.desktop.InterApplicationBus.subscribe('*',
        'sharedContext:subscribe',
      function () {
        sharedContext.addObserver(observer.createObserver({
            uuid: arguments[1]
        }));
      });
  });
});

