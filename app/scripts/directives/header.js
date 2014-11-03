'use strict';

/**
 * @ngdoc directive
 * @name appLauncherApp.directive:header
 * @description
 * # header
 */
angular.module('appLauncherApp')
  .directive('appHeader', function (appHeight,  $rootScope) {
    return {
      templateUrl: '../../views/app-header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) { // jshint ignore:line

        element[0].addEventListener('click', function(){
          $rootScope.$broadcast('directive:appSettings:toggle');
        });
        //element.text('this is the header directive');
      }
    };
  });
