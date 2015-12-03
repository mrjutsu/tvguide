'use strict';

/**
 * @ngdoc function
 * @name tvguideApp.controller:TvshowCtrl
 * @description
 * # TvshowCtrl
 * Controller of the tvguideApp
 */
angular.module('tvguideApp')
  .controller('TvshowCtrl', [ '$scope','$routeParams','ShowDetail',function ($scope,$routeParams,ShowDetail) {
    $scope.show = ShowDetail.get({ showId: $routeParams.id });
  }]);
