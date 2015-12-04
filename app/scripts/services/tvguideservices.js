'use strict';

/**
 * @ngdoc service
 * @name tvguideApp.TVGuideServices
 * @description
 * # TVGuideServices
 * Factory in the tvguideApp.
 */
angular.module('tvguideApp')
  .factory('TVGuideServices', [ '$http', '$q', function ($http,$q) {

    function all(){

      var deferred = $q.defer();

      $http.get('http://api.tvmaze.com/shows')
        .success(function(shows){
          deferred.resolve(shows);
      });

      return deferred.promise;
    }

    // return $resource('http://api.tvmaze.com/shows', {},
		// {
		// 	query: { method: 'GET',
		// 		isArray: true
		//   }
	  // });

    return {
      all: all
    };
  }]);
