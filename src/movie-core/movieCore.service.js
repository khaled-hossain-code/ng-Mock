(function(){
    'use strict';
    angular.module('movieCore',['ngResource'])
            .factory('PopularMovies', popularMovies);
    
    var popularMovies = function($resource){
        return $resource('popular/:movieId', {movieId : '@id'}, {
            update:{
                method: 'PUT'
            }
        });
    }
})();