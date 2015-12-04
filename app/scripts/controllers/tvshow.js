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
    $scope.show = TVGuideServices.get({ showId: $routeParams.id });
  }]);
