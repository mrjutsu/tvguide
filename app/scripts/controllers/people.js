'use strict';

/**
 * @ngdoc function
 * @name tvguideApp.controller:PeopleCtrl
 * @description
 * # PeopleCtrl
 * Controller of the tvguideApp
 */
angular.module('tvguideApp')
  .controller('PeopleCtrl', [ '$scope','$routeParams','TVGuideServices', function ($scope,$routeParams,TVGuideServices) {
    $scope.actor = TVGuideServices.getActor($routeParams.id).query();
  }]);
