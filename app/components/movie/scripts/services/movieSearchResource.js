/**
 * Created by Antoine on 2015-10-02.
 */
movieApp.factory('movieSearchResource', ["$resource", function ($resource) {
    return $resource("https://umovie-team01.herokuapp.com/unsecure/search/:type", {}, {
        query: {
            method: "GET",
            isArray: false,
            params: {
                "type": "movies",
                "q":"movies"
            }
        }

    });
}]);