/*global fin*/

'use strict';

/**
 * @ngdoc service
 * @name appLauncherApp.observer
 * @description
 * # observer
 * Factory in the appLauncherApp.
 */
angular.module('appLauncherApp')
  .factory('observer', function (openFin) {

    var Observer = function(config){
      var uuid = config.uuid || '';

      return {
        update: function(change){
          console.log(change, fin.desktop.InterApplicationBus);
          openFin.whenReady(function(){
            openFin.fin.desktop.InterApplicationBus
              .send(
                uuid,'sharedContext:'+uuid+':updated',change);
          });
        }
      };
    };

    // Public API here
    return {
      createObserver: function (config) {
        return new Observer(config);
      }
    };
  });
