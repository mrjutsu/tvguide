'use strict';

/**
 * @ngdoc function
 * @name tvguideApp.controller:TvshowCtrl
 * @description
 * # TvshowCtrl
 * Controller of the tvguideApp
 */
angular.module('tvguideApp')
  .controller('TvshowCtrl', [ '$scope','$routeParams','TVGuideServices',function ($scope,$routeParams,TVGuideServices) {
    $scope.show = TVGuideServices.showDetail($routeParams.id).query();
    $scope.cast = TVGuideServices.getCast($routeParams.id).query();
    $scope.episodes = TVGuideServices.getEpisodes($routeParams.id).query();
  }]);
