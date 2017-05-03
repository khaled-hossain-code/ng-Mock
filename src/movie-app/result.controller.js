(function(){
    'use strict';
    angular.module('movieApp')
            .controller('ResultController', function($scope,omdbApi){
                omdbApi.search('star wars')
                       .then(function(data){
                           $scope.results = data.Search;
                       })
            })
})();