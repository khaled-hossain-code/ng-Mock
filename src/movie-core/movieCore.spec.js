describe('MovieCore', function(){
    var PopularMovies;
    var $httpBackend;

    beforeEach(module('movieCore'));
    beforeEach(inject(function(_PopularMovies_,_$httpBackend_){
        PopularMovies = _PopularMovies_;
        $httpBackend = _$httpBackend_;
    }));
})