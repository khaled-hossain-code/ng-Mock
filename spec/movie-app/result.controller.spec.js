(function(){
    'use strict';
 describe('Result Controller', function(){
    var result = {
        "Search" : [
            {
                "Title":"Star Wars V"
            },
            {
                "Title": "Star Wars VI"
            },
            {
                "Title": "Star Wars VII"
            }
        ]
    }
    var $controller,$q,$rootScope,$scope,omdbApi;

    beforeEach(module('movieApp'));
    beforeEach(module('omdbModule'));

    beforeEach(inject(function(_$controller_,_$q_,_$rootScope_,_omdbApi_){
        $controller = _$controller_;
        $scope = {}
        $q = _$q_;
        $rootScope = _$rootScope_;
        omdbApi = _omdbApi_;
    }));

    it('load Search Result', function(){
        spyOn(omdbApi,'search').and.callFake(function(){
            var deffered = $q.defer();
            deffered.resolve(result);
            return deffered.promise;
        });

        $controller('ResultController',{ $scope : $scope});        
        //this will resolve the promise
        $rootScope.$apply(); 
        expect($scope.results[0].Title).toBe(result.Search[0].Title);
    })
 })

})();