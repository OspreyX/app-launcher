'use strict';

/**
 * @ngdoc service
 * @name appLauncherApp.appSearch
 * @description
 * # appSearch
 * Service in the appLauncherApp.
 */
angular.module('appLauncherApp')
  .service('appSearch', function appSearch() {

    return {
      searchString: ''
    };
  });
