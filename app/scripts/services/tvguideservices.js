'use strict';

/**
 * @ngdoc service
 * @name tvguideApp.TVGuideServices
 * @description
 * # TVGuideServices
 * Factory in the tvguideApp.
 */
angular.module('tvguideApp')
  .factory('TVGuideServices', [ '$http', '$q','$resource', function ($http,$q,$resource) {

    function all() {
      return $resource('http://api.tvmaze.com/shows', {},
  		{
  			query: {
          method: 'GET',
  				isArray: true
  		  }
  	  });
    }

    function showDetail(id) {
      var url = "http://api.tvmaze.com/shows/:showID:".replace(":showID:",id);
      return $resource(url, {},
  		{
  			query: {
          method: 'GET',
  		  }
  	  });
    }

    function getCast(id) {
      var url = "http://api.tvmaze.com/shows/:showID:/cast"
        .replace(":showID:",id);
      return $resource(url, {},
  		{
  			query: {
          method: 'GET',
          isArray: true
  		  }
  	  });
    }

    return {
      all: all,
      showDetail: showDetail,
      getCast: getCast
    };
  }]);
