'use strict';

/**
 * @ngdoc function
 * @name tvguideApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the tvguideApp
 */
angular.module('tvguideApp')
  .controller('NavigationCtrl', function () {

    this.navigation = false;

    this.switchNav = function() {
      this.navigation = !this.navigation;
    };
  });
