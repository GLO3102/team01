/**
 * Created by Antoine on 2015-10-15.
 */
/**
 * Created by Antoine on 2015-10-15.
 */
userApp.controller("watchlist-controller", function ($scope, loggedUserService, watchlistResource) {
    $scope.loggedUser = loggedUserService.getLoggedUser();

    $scope.fetchLoggedUserWatchlist = function (){
        watchlistResource.query({}, function onSuccess(data) {
            console.log(data);
        })
    }

    $scope.fetchLoggedUserWatchlist();
});