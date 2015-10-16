/**
 * Created by Antoine on 2015-10-15.
 */
userApp.service("userWatchlistContainer", function ($rootScope) {

    var userWatchlist = {};

    var getUserWatchlist = function () {
        return userWatchlist;
    }

    var setUserWatchlist = function (newUserWatchlist) {
        userWatchlist.watchlists = newUserWatchlist;
    }
    return {
        getUserWatchlist: getUserWatchlist,
        setUserWatchlist: setUserWatchlist
    };
});