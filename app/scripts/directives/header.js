'use strict';

/**
 * @ngdoc directive
 * @name appLauncherApp.directive:header
 * @description
 * # header
 */
angular.module('appLauncherApp')
  .directive('appHeader', function () {
    return {
      templateUrl: '../../views/app-header.html',
      restrict: 'E',
      link: function postLink(/*scope, element, attrs*/) {
        //element.text('this is the header directive');
      }
    };
  });
