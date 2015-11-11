homeApp.factory('homeResource', ["$resource", function ($resource) {
    return $resource("https://umovie-team01-staging.herokuapp.com/unsecure/popular/:type", {}, {
        getPopularMovies: {
            method: "GET",
            isArray: true,
            params : {
                type : "movies"
            }
        },
        getPopularTvShows: {
            method: "GET",
            isArray: true,
            params : {
                type : "tvshows"
            }
        }

    });
}]);