'use strict';

/**
 * @ngdoc function
 * @name tvguideApp.controller:TvshowsCtrl
 * @description
 * # TvshowsCtrl
 * Controller of the tvguideApp
 */
angular.module('tvguideApp')
  .controller('TvshowsCtrl',[ '$scope', 'TVGuideServices', function ($scope,TVGuideServices) {
    // $scope.shows = TVGuideServices.query();
    $scope.shows = TVGuideServices.all().then(function(shows){
      $scope.shows = shows;
    });
  }]);
