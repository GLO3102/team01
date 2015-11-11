
movieApp.factory('searchTvshowResource', ["$resource", function ($resource) {
    return $resource("https://umovie-team01-staging.herokuapp.com/unsecure/search/tvshows/season/", {}, {
        query: {
            method: "GET",
            isArray: false,
            params: {
                "q":"query"
            }
        }

    });
}]);