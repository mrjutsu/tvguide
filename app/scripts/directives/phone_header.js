'use strict';

/**
 * @ngdoc directive
 * @name tvguideApp.directive:phoneHeader
 * @description
 * # phoneHeader
 */
angular.module('tvguideApp')
  .directive('phoneHeader', function () {
    return {
      templateUrl: 'partials/resp_header.html',
      restrict: 'E'
    };
  });
