/**
 * Created by Antoine on 2015-10-15.
 */
angular.module('watchlistDropdown', []).directive('userWatchlistDropdown', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/user/views/watchlistDropdown.html'
    };
});
