searchApp.service("searchSelectionService", function ($rootScope) {
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