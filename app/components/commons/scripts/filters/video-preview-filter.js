/**
 * Created by Antoine on 2015-09-14.
 */
homeApp.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);