searchApp.service("searchService", function ($rootScope) {

    var movieResult = [];

    var tvshowResult = [];

    var actorResult = [];

    var getMovieResults = function () {
        return movieResult;
    };

    var setMovieResults = function (cachedSearchResults) {
        movieResult = cachedSearchResults;
    };

    var getTvShowResults = function () {
        return tvshowResult;
    };

    var setTvShowResults = function (cachedSearchResults) {
        tvshowResult = cachedSearchResults;
    };

    var getActorResults = function () {
        return actorResult;
    };

    var setdActorResults = function (cachedSearchResults) {
        actorResult = cachedSearchResults;
    };

    return {
        getMovieResults: getMovieResults,
        setMovieResults: setMovieResults,
        getTvShowResults: getTvShowResults,
        setTvShowResults: setTvShowResults,
        getActorResults: getActorResults,
        setActorResults: setdActorResults
    };
});