'use strict';

/**
 * @ngdoc function
 * @name tvguideApp.controller:TvshowsCtrl
 * @description
 * # TvshowsCtrl
 * Controller of the tvguideApp
 */
angular.module('tvguideApp')
  .controller('TvshowsCtrl',[ '$scope', 'Shows', function ($scope,Shows) {
    $scope.shows = Shows.query();
  }]);
