
movieApp.factory('searchMovieResource', ["$resource", function ($resource) {
    return $resource("https://umovie-team01-staging.herokuapp.com/unsecure/search/movies/", {}, {
        query: {
            method: "GET",
            isArray: false,
            params: {
                "q":"query"
            }
        }

    });
}]);
