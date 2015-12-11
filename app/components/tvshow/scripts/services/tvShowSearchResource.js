/**
 * Created by Jean-Sebastien on 2015-10-05.
 */
tvShowApp.factory('tvShowSearchResource', ["$resource", function ($resource) {
    return $resource("https://umovie-team01.herokuapp.com/search/:type/seasons", {}, {
        query: {
            method: "GET",
            isArray: false,
            params: {
                "type": "tvshows",
                "q":"season"
            }
        }
    });
}]);