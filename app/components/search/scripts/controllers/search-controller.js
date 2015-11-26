
searchApp.controller("search-controller", function ($scope, $route, $location, searchService) {

    $scope.query = "";

    $scope.initSearch = function () {
        searchService.setQuery($scope.query);
        $location.path("/search");
        $route.reload();
        $scope.query = "";
    };
});