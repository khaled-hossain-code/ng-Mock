describe('omdb service', function(){
var movieData = {"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","Rated":"PG","Released":"25 May 1977","Runtime":"121 min","Genre":"Action, Adventure, Fantasy","Director":"George Lucas","Writer":"George Lucas","Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing","Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.","Language":"English","Country":"USA","Awards":"Won 6 Oscars. Another 50 wins & 28 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"92/100"}],"Metascore":"92","imdbRating":"8.7","imdbVotes":"970,649","imdbID":"tt0076759","Type":"movie","DVD":"21 Sep 2004","BoxOffice":"N/A","Production":"20th Century Fox","Website":"http://www.starwars.com/episode-iv/","Response":"True"};
var movieDatabyId = {"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","Rated":"PG","Released":"25 May 1977","Runtime":"121 min","Genre":"Action, Adventure, Fantasy","Director":"George Lucas","Writer":"George Lucas","Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing","Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.","Language":"English","Country":"USA","Awards":"Won 6 Oscars. Another 50 wins & 28 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"92/100"}],"Metascore":"92","imdbRating":"8.7","imdbVotes":"970,649","imdbID":"tt0076759","Type":"movie","DVD":"21 Sep 2004","BoxOffice":"N/A","Production":"20th Century Fox","Website":"http://www.starwars.com/episode-iv/","Response":"True"};
var omdbApi = {}, $httpBackend;

    beforeEach(module('omdbModule'));
    beforeEach(inject(function(_omdbApi_, _$httpBackend_){
            omdbApi = _omdbApi_;
            $httpBackend = _$httpBackend_;
        }));

    it('should return search movie data', function(){        
        var response;
        //whenever any one request to the url please response with status 200 and data = moviedata
        $httpBackend.when('GET','http://www.omdbapi.com/?t=star+wars')
                    .respond(200,movieData);

        omdbApi.search('star wars')
               .then(function(data){
                   response = data;
               })
        //As the request is Asynchronous we need to handle it and resolve it by flush function
        $httpBackend.flush();
        expect(response).toEqual(movieData);
    });

    it('should handle error for search movie data', function(){        
        var response;
        //whenever any one request to the url please response with status 200 and data = moviedata
        $httpBackend.when('GET','http://www.omdbapi.com/?t=star+wars')
                    .respond(500);

        omdbApi.search('star wars')
               .then(function(data){
                   response = data;
               })
               .catch(function(){
                   response = 'Error!';
               })
        //As the request is Asynchronous we need to handle it and resolve it by flush function
        $httpBackend.flush();
        expect(response).toEqual('Error!');
    });

    it('should return movie data by ID', function(){
        var response = {};

        $httpBackend.when('GET', 'http://www.omdbapi.com/?i=tt0076759')
                    .respond(200,movieDatabyId);
        omdbApi.find('tt0076759')
               .then(function(data){
                    response = data;
               })
        $httpBackend.flush();
        expect(response).toEqual(movieDatabyId);
    });

    it('should handle error return movie data by ID', function(){
        var response = {};

        $httpBackend.when('GET', 'http://www.omdbapi.com/?i=tt0076759')
                    .respond(500);

        omdbApi.find('tt0076759')
               .then(function(data){
                    response = data;
               })
               .catch(function(){
                   response = 'Error!';
               })
        $httpBackend.flush();
        expect(response).toEqual('Error!');
    });
})