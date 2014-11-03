'use strict';

/**
 * @ngdoc function
 * @name appLauncherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appLauncherApp
 */
angular.module('appLauncherApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
