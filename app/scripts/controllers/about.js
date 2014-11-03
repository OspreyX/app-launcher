'use strict';

/**
 * @ngdoc function
 * @name appLauncherApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appLauncherApp
 */
angular.module('appLauncherApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
