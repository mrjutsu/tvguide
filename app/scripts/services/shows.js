'use strict';

/**
 * @ngdoc service
 * @name tvguideApp.shows
 * @description
 * # shows
 * Factory in the tvguideApp.
 */
angular.module('tvguideApp')
  .factory('shows', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
