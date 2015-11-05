
searchApp.factory('searchResource', ["$resource", function ($resource) {
    return $resource("https://umovie-team01.herokuapp.com/unsecure/search/", {}, {
        query: {
            method: "GET",
            params: {
                "q": "query"
            }
        }
    });
}]);