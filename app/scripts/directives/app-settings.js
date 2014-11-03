'use strict';

/**
 * @ngdoc directive
 * @name appLauncherApp.directive:appSettings
 * @description
 * # appSettings
 */
angular.module('appLauncherApp')
  .directive('appSettings', function ($rootScope, appHeight) { // jshint ignore:line
    return {
      templateUrl: '../../views/app-settings.html',
      restrict: 'E',
      compile: function(element){

        var settingsPanel = element[0].querySelector('.settings');

        //settingsPanel.style.top = -appHeight + 'px';

        return {
          post: function postLink(scope, element, attrs) { // jshint ignore:line
            var toggle = true;

            $rootScope.$on('directive:appSettings:toggle', function(){
              toggle = !toggle;

              var classList = settingsPanel.classList,
                  action = toggle ?  classList.remove : classList.add;

              action.call(settingsPanel.classList, 'in-view');
            });
          }//end link
        };//end compile return
      }//end compile
    };
  });
