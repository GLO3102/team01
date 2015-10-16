/**
 * Created by Antoine on 2015-10-15.
 */
userApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when("/users/:userId",
            {
                templateUrl: "components/user/views/userDashboard.html",
                controller: "user-controller"
            })
            .when("/users/:userId/watchlist", {
                templateUrl:"components/user/views/userWatchlist.html",
                controller:"watchlist-controller"
            });
    }]);
