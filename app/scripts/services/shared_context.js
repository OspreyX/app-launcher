'use strict';

/**
 * @ngdoc service
 * @name appLauncherApp.sharedContext
 * @description
 * # sharedContext
 * Service in the appLauncherApp.
 */
angular.module('appLauncherApp')
  .service('sharedContext', function sharedContext() {

    // var ManagedList = function(){
    //   var list = [],
    //       inList = function(index){
    //         return index >= 0 && index < list.length;
    //       };

    //   this.add = function(observer){
    //     list.push(observer);
    //   };

    //   this.get = function(index){
    //     if (inList(index)){
    //       return list[index];
    //     }
    //   };

    //   this.remove = function(index){
    //     if (inList(index)){
    //       list.splice(index, 1);
    //     }
    //   };

    // };

    var shared = {
      appSymbol: '',
      watchlist: [],
      currentUser: {
        email: ''
      }
    };

    var observerList = [];

    var addObserver = function(observer){
      observerList.push(observer);

      return observerList.indexOf(observer);
    };

    var notify = function(changed){
      var observer = observerList.length;

      while(observer--){

        observerList[observer].update({
          name: changed.name,
          oldValue: changed.oldValue,
          newValue: changed.newValue,
          currentState: shared
        });
      }
    };

    var getAppSymbol = function(){
      return shared.appSymbol;
    };

    var getWatchList = function(){
      return shared.watchlist;
    };

    var getCurrentUser = function() {
      return shared.currentUser;
    };

    var setAppSymbol = function(newSymbol){
      var oldValue = shared.appSymbol;

      shared.appSymbol = newSymbol;
      notify({
        name: 'appSymbol',
        oldValue: oldValue,
        newValue: newSymbol
      });
    };

    var addSymbolToWatchlist = function(symbol){
      shared.watchlist.push({
        name: symbol
      });
      notify({
        name: 'watchlist',
        newValue: symbol
      });
    };

    window.setAppSymbol = setAppSymbol;
    window.observerList = observerList;
    window.addSymbolToWatchlist = addSymbolToWatchlist;

    return {
      addObserver: addObserver,
      getAppSymbol: getAppSymbol,
      getWatchList: getWatchList,
      getCurrentUser: getCurrentUser,
      setAppSymbol: setAppSymbol,
      addSymbolToWatchlist: addSymbolToWatchlist
    };

  });
