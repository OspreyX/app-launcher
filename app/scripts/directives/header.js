'use strict';

/**
 * @ngdoc directive
 * @name appLauncherApp.directive:header
 * @description
 * # header
 */
angular.module('appLauncherApp')
  .directive('appHeader', function (appHeight,  $rootScope, appSearch) {
    return {
      templateUrl: '../../views/app-header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) { // jshint ignore:line

        element[0]
          .querySelector('i')
          .addEventListener('click', function(){
          $rootScope.$broadcast('directive:appSettings:toggle');
        });

        scope.model = {
          appSearch: appSearch
        };
      }
    };
  });
