
movieApp.factory('searchActorResource', ["$resource", function ($resource) {
    return $resource("https://umovie-team01-staging.herokuapp.com/unsecure/search/actors/", {}, {
        query: {
            method: "GET",
            isArray: false,
            params: {
                "q":"query"
            }
        }

    });
}]);