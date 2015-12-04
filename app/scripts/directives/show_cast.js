'use strict';

/**
 * @ngdoc directive
 * @name tvguideApp.directive:showCast
 * @description
 * # showCast
 */
angular.module('tvguideApp')
  .directive('showCast', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/show_cast.html'
    };
  });
