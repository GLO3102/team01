
searchApp.factory('searchResource', ["$resource", function ($resource) {
    return $resource("https://umovie-team01.herokuapp.com/search/:type/:seasons", {}, {

        searchMovie: {
            method: "GET",
            isArray: false,
            params: {
                type: "movies",
                q: "query"
            }
        },

        searchTvShows: {
            method: "GET",
            isArray: false,
            params : {
                type : "tvshows",
                seasons: "seasons",
                q: "query"
            }
        },

        searchActor: {
            method: "GET",
            isArray: false,
            params: {
                type: "actors",
                limit : "10",
                q: "query"
            }
        },

        searchUser: {
            method: "GET",
            isArray: false,
            params: {
                type: "users",
                q: "query"
            }
        }

    });
}]);