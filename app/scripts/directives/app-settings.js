'use strict';

/**
 * @ngdoc directive
 * @name appLauncherApp.directive:appSettings
 * @description
 * # appSettings
 */
angular.module('appLauncherApp')
  .directive('appSettings', function () {
    return {
      templateUrl: '../../views/app-settings.html',
      restrict: 'E',
      link: function postLink(/*scope, element, attrs*/) {
        //element.text('this is the appSettings directive');
      }
    };
  });
