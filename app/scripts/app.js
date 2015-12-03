'use strict';

/**
 * @ngdoc overview
 * @name tvguideApp
 * @description
 * # tvguideApp
 *
 * Main module of the application.
 */
angular
  .module('tvguideApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/tvshows', {
        templateUrl: 'views/tvshows.html',
        controller: 'TvshowsCtrl',
        controllerAs: 'tvshows'
      })
      .when('/tvshow', {
        templateUrl: 'views/tvshow.html',
        controller: 'TvshowCtrl',
        controllerAs: 'tvshow'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'people'
      })
      .when('/people/:id', {
        templateUrl: 'views/people_show.html',
        controller: 'PeopleShowCtrl',
        controllerAs: 'peopleShow'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
