'use strict';

/**
 * @ngdoc directive
 * @name appLauncherApp.directive:appBody
 * @description
 * # appBody
 */
angular.module('appLauncherApp')
  .directive('appBody', function () {
    return {
      templateUrl: '../../views/app-body.html',
      restrict: 'E',
      link: function postLink(scope) {
        //element.text('this is the appBody directive');
        scope.model = {
          apps: [{
            name: 'Social Alpha',
            img: 'images/social-alpha.ico'
          },
          {
            name: 'Social Alpha',
            img: 'images/iq.ico'
          },
          {
            name: 'Social Alpha',
            img: 'images/iq.ico'
          },
          {
            name: 'Social Alpha',
            img: 'images/social-alpha.ico'
          },
          {
            name: 'Social Alpha',
            img: 'images/social-alpha.ico'
          },
          {
            name: 'Social Alpha',
            img: 'images/iq.ico'
          },
          {
            name: 'Social Alpha',
            img: 'images/social-alpha.ico'
          }]
        };
      }
    };
  });
