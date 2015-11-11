/**
 * Created by Antoine on 2015-10-15.
 */
userApp.factory('watchlistResource', ["$resource", function ($resource) {
    return $resource("https://umovie-team01-staging.herokuapp.com/unsecure/watchlists/:id/:type/:trackId", {}, {
        query: {
            method: "GET",
            isArray: true
        },
        get :{
            method: "GET",
            params:{
                id:"@id"
            }
        },
        addMovieToWatchlist:{
            method:"POST",
            params:{
                id:"@id",
                type:"movies"
            }
        },
        deleteMovieFromWatchList:{
            method:"DELETE",
            params:{
                id:"@id",
                type:"movies",
                trackId:"@trackId"
            }
        },
        deleteWatchlist:{
            method:"DELETE",
            params:{
                id:"@id"
            }
        },
        modifyWatchlist:{
            method:"PUT",
            params:{
                id:"@id"
            }
        }

    });
}]);