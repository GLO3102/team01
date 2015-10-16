/**
 * Created by Antoine on 2015-09-15.
 */
movieApp.service("movieSelectionService", function ($rootScope) {
    var movie = {};
    var movieSearchResults = [];
    var movieGenreResults = [];

    var getMovieGenresResults = function (){
        return movieGenreResults;
    }
    var setMovieGenresResults = function (genres){
        movieGenreResults = genres;
    }
    var getMovieSearchResults = function (){
        return movieSearchResults;
    }

    var setMovieSearchResults = function(cachedSearchResults){
        movieSearchResults = cachedSearchResults;
    }
    var getSelectedMovie = function () {
        return movie;
    };

    var setSelectedMovie = function (selectedMovie) {
        movie = selectedMovie;
    };

    return {
        getSelectedMovie: getSelectedMovie,
        setSelectedMovie: setSelectedMovie,
        getMovieSearchResults: getMovieSearchResults,
        setMovieSearchResults: setMovieSearchResults,
        getMovieGenresResults: getMovieGenresResults,
        setMovieGenresResults: setMovieGenresResults
    };
});