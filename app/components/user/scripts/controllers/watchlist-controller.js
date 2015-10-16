/**
 * Created by Antoine on 2015-10-15.
 */
userApp.controller("watchlist-controller", function ($scope, loggedUserService, watchlistResource, userWatchlistContainer) {

    $scope.loggedUser = loggedUserService.getLoggedUser();
    $scope.userWatchlist = [];

    $scope.initLoggedUserWatchlist = function () {

        var userWatchlist = userWatchlistContainer.getUserWatchlist();

        if (Object.keys(userWatchlist).length == 0) {
            fetchLoggedUserWatchlist();
        }
        else {
            $scope.userWatchlist = userWatchlist.watchlists;
        }
    };

    var fetchLoggedUserWatchlist = function () {
        watchlistResource.query({}, function onSuccess(data) {
            var userWatchlist = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty("owner")) {
                    if (data[i].owner.email === $scope.loggedUser) {
                        userWatchlist.push(data[i]);
                    }
                }
            }
            userWatchlistContainer.setUserWatchlist(userWatchlist);
            $scope.userWatchlist = userWatchlist;
        })
    };

    $scope.removeMovieFromWatchlist = function (watchlist, movie) {
        watchlistResource.deleteMovieFromWatchList({
                "id": watchlist.id,
                "trackId": movie.trackId
            }, function onSuccess(data) {
                updateLocalWatchlist(watchlist, movie);
            }
        )
    }
    $scope.removeWatchlist = function (watchlist) {
        watchlistResource.deleteWatchlist({
            "id": watchlist.id
        }, function onSuccess() {
            $scope.userWatchlist.filter(function (watchlistInLocal) {
                return watchlistInLocal.id == watchlist.id;
            }).pop();
            userWatchlistContainer.setUserWatchlist($scope.userWatchlist);
            $scope.$apply();
        })
    }
    var updateLocalWatchlist = function (watchlist, movie) {

        var watchlistToModify = $scope.userWatchlist.filter(function (watchlistInLocal) {
            return watchlistInLocal.id == watchlist.id;
        }).pop();
        var movieToRemove = watchlistToModify.movies.filter(function (movieInLocalWatchlist) {
            return movieInLocalWatchlist.trackId == movie.trackId;
        }).pop();
        movieToRemove.remove();

        userWatchlistContainer.setUserWatchlist($scope.userWatchlist);
    };

    $scope.addWatchlist = function (name) {
        watchlistResource.$save({}, {
            "owner": {
                "email": $scope.loggedUser
            },
            "name": name
        }, function onSuccess(data) {
            $scope.userWatchlist.push(data);
        })
    };
    
    $scope.initLoggedUserWatchlist();

});