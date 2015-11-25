searchApp.service("searchService", function ($rootScope) {

    var movieResult = [];

    var tvshowResult = [];

    var actorResult = [];

    var isMovieLoading = false;

    var isTvShowLoading = false;

    var isActorLoading = false;

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

    var setActorResults = function (cachedSearchResults) {
        actorResult = cachedSearchResults;
    };

    var getMovieLoading = function () {
        return isMovieLoading;
    };

    var setMovieLoading = function (loading) {
        isMovieLoading = loading;
    };

    var getTvShowLoading = function () {
        return isTvShowLoading;
    };

    var setTvShowLoading = function (loading) {
        isTvShowLoading = loading;
    };

    var getActorLoading = function () {
        return isActorLoading;
    };

    var setActorLoading = function (loading) {
        isActorLoading = loading;
    };

    return {
        getMovieResults: getMovieResults,
        setMovieResults: setMovieResults,
        getTvShowResults: getTvShowResults,
        setTvShowResults: setTvShowResults,
        getActorResults: getActorResults,
        setActorResults: setActorResults,
        getMovieLoading: getMovieLoading,
        setMovieLoading: setMovieLoading,
        getTvShowLoading: getTvShowLoading,
        setTvShowLoading: setTvShowLoading,
        getActorLoading: getActorLoading,
        setActorLoading: setActorLoading
    };
});