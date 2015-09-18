/**
 * Created by Antoine on 2015-09-15.
 */
movieApp.service("movieSelectionService", function ($rootScope) {
    var movie = {};

    var getSelectedMovie = function () {
        return movie;
    };

    var setSelectedMovie = function (selectedMovie) {
        movie = selectedMovie;
    };

    return {
        getSelectedMovie: getSelectedMovie,
        setSelectedMovie: setSelectedMovie
    };
});