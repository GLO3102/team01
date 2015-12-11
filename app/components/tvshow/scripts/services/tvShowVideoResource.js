tvShowApp.factory('tvShowVideoResource', ["$resource", function ($resource) {
    return $resource("https://umovie-team01.herokuapp.com/tv/:id/season/:seasonNumber/episode/:episodeNumber", {}, {
        query: {
            method: "GET",
            isArray: false,
            params: {
                "id": "@id",
                "seasonNumber":"@seasonNumber",
                "episodeNumber":"@episodeNumber"
            }
        }
    });
}]);