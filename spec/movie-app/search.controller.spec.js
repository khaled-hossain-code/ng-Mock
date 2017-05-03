(function(){
    'use strict';
    describe('Search Controller', function(){
        var $this;
        var $controller;

        beforeEach(module('movieApp'));
        
        beforeEach(inject(function(_$controller_){
            $controller = _$controller_;
        }));

        it('should return true whenever search is called', function(){
            $this = $controller('SearchController');
            var response = $this.search();
            expect(response).toEqual(true);
        })
    })
})();