/**
 * Created by Antoine on 2015-10-15.
 */
angular.module('watchlistDropdown', []).directive('userWatchlistDropdown', function () {
        var controller = ['$scope', 'loginService', 'watchlistResource', 'userWatchlistContainer',

            function ($scope, loginService, watchlistResource, userWatchlistContainer) {

                $scope.loggedUser = loginService.getUser();
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
                $scope.addToWatchlist = function (watchlist, movie) {
                    watchlistResource.addMovieToWatchlist({
                            "id": watchlist.id
                        }, movie, function onSuccess(data) {
                            updateLocalWatchlist(watchlist, movie);
                        }
                    )
                }

                var updateLocalWatchlist = function (watchlist, movie) {
                    var unUpdatedWatchlist = $scope.userWatchlist;
                    for (var i = 0; i < unUpdatedWatchlist.length; i++) {
                        if (unUpdatedWatchlist[i].id === watchlist.id) {
                            unUpdatedWatchlist[i].movies.push(movie);
                        }
                    }
                }
                $scope.initLoggedUserWatchlist();
            }];


        return {
            restrict: 'E',
            templateUrl: 'components/user/views/watchlistDropdown.html',
            controller: controller
        };
    }
)

