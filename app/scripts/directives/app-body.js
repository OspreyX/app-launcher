'use strict';

/**
 * @ngdoc directive
 * @name appLauncherApp.directive:appBody
 * @description
 * # appBody
 */
angular.module('appLauncherApp')
  .directive('appBody', function (openFin, appSearch) {
    return {
      templateUrl: 'views/app-body.html',
      restrict: 'E',
      link: function postLink(scope) {
        //element.text('this is the appBody directive');
        scope.model = {
          apps: [{
            name: 'Social Alpha',
            url: 'http://social-alpha.com/',
            img: 'images/social-alpha.ico'
          },
          {
            name: 'Chart IQ',
            url: 'http://connect2.chartiq.com/stx-advanced.html',
            img: 'images/iq.ico'
          },
          {
            name: 'Chart IQ',
            url: 'http://connect2.chartiq.com/stx-advanced.html',
            img: 'images/iq.ico'
          },
          {
            name: 'Social Alpha',
            url: 'http://social-alpha.com/',
            img: 'images/social-alpha.ico'
          },
          {
            name: 'Social Alpha',
            url: 'http://social-alpha.com/',
            img: 'images/social-alpha.ico'
          },
          {
            name: 'Chart IQ',
            url: 'http://connect2.chartiq.com/stx-advanced.html',
            img: 'images/iq.ico'
          },
          {
            name: 'Social Alpha',
            url: 'http://social-alpha.com/',
            img: 'images/social-alpha.ico'
          }],
          appSearch: appSearch
        };

        scope.openApp = function(app, index){
          console.log(openFin, app, index);
          openFin.newOpenFinApplication({
            url: app.url,
            uuid: 'launchedApp' + index,
            applicationIcon: app.img,
            name: app.name,
            mainWindowOptions: {
              defaultHeight: 600,
              defaultWidth: 800,
              defaultTop: 300,
              defaultLeft: 300,
              autoShow: true
            }
          });
        };


      }//end link
    };
  });
