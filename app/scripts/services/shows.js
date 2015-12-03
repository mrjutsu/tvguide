'use strict';

/**
 * @ngdoc service
 * @name tvguideApp.shows
 * @description
 * # shows
 * Factory in the tvguideApp.
 */
angular.module('tvguideApp')
  .factory('Shows', [ '$resource', function ($resource) {
    return $resource('http://api.tvmaze.com/shows', {},
		{
			query: { method: 'GET',
				isArray: true
		  }
	  });
  }]);
