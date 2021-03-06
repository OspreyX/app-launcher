/* global fin*/
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
  openFin.whenReady(function(){
    fin.desktop.InterApplicationBus.subscribe('*',
        'sharedContext:subscribe',
      function () {
        sharedContext.addObserver(observer.createObserver({
            uuid: arguments[1]
        }));
      });
  });
});

