'use strict';

/**
 * @ngdoc directive
 * @name tvguideApp.directive:showEpisodes
 * @description
 * # showEpisodes
 */
angular.module('tvguideApp')
  .directive('showEpisodes', function () {
    return {
      templateUrl: 'partials/show_episodes.html',
      restrict: 'E'
    };
  });
