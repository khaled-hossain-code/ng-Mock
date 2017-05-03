(function(){
    'use strict';

    angular.module('omdbModule')
           .factory('omdbApi', function omdbApiFactory($http, $q){
               var service = {};
               var baseUrl = 'http://www.omdbapi.com/';
                
               function httpGetPromise(url){
                    var deferred = $q.defer();

                       $http.get(url)
                            .success(function(data){
                                deferred.resolve(data);
                            })
                            .error(function(){
                                deferred.reject();
                            });

                        return deferred.promise;
               }

                service.search = function(name){
                       return httpGetPromise(baseUrl + '?t=' + name.replace(' ','+'));
                   }
                
                service.find = function(id){
                    return httpGetPromise(baseUrl + '?i=' + id);
                         
                }
                
                return service;
           })
})();