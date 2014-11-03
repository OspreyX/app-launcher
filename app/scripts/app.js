'use strict';

/**
 * @ngdoc overview
 * @name appLauncherApp
 * @description
 * # appLauncherApp
 *
 * Main module of the application.
 */
angular
  .module('appLauncherApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
