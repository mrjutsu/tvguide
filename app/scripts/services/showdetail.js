'use strict';

/**
 * @ngdoc service
 * @name tvguideApp.ShowDetail
 * @description
 * # ShowDetail
 * Factory in the tvguideApp.
 */
angular.module('tvguideApp')
  .factory('ShowDetail', [ '$resource', function ($resource) {
    return $resource('http://api.tvmaze.com/shows/:showId', {},
		{
			query: {
        method: 'GET',
		  }
	  });
  }]);
