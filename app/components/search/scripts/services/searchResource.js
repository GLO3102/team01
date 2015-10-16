
searchApp.factory('searchResource', ["$resource", function ($resource) {
    return $resource("https://umovie-team01.herokuapp.com/unsecure/search?q=:query", {}, {
        query: {
            method: "GET",
            params: {
                "q": "@query"
            }
        }

    });
}]);