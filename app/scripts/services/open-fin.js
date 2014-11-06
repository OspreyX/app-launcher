/* global fin*/
'use strict';

/**
 * @ngdoc service
 * @name appLauncherApp.openFin
 * @description
 * # openFin
 * Provider in the appLauncherApp.
 */
angular.module('appLauncherApp')
  .provider('openFin', function () {

    var isReady = false,
        pendingCallbacks = [];

    var whenReady = function(callback){
      if (isReady) {
        callback();
      }
      else {
        pendingCallbacks.push(callback);
      }
    };

    var newOpenFinApplication = function(options){
      whenReady(function(){

        var app = new fin.desktop.Application(options,
          function () {
              console.log('Application successfully created');
              app.run();
          },
          function () {
              console.log('Error creating application');
          });

      });
    };


    var setIconTray = function(){
      var currApp = fin.desktop.Application.getCurrent(),
          currAppWindow = fin.desktop.Window.getCurrent(),
          toggleShowHide = false;

      currApp.setTrayIcon(
        'https://demoappdirectory.openf.in/desktop/config/apps/ChartIQ/ChartIQ/rvm/icon.png',
        function(/*clickInfo*/){
          var showHide = toggleShowHide ? 'show' : 'hide';
          currAppWindow[showHide]();
          toggleShowHide = !toggleShowHide;
        },
        function(){
          console.log('success');
        },
        function(event){
          console.log('fail', event);
        });

    };



    fin.desktop.main(function() {
      isReady = true;

      pendingCallbacks.forEach(function(callback){
        callback();
      });

      setIconTray();
    });

    return {
      $get: function(){
        return {
          whenReady: whenReady,
          newOpenFinApplication: newOpenFinApplication
        };
      }//end $get
    };
  });
