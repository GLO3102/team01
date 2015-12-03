
searchApp.controller("search-controller", function ($scope, $route, $location, searchService) {

    $scope.query = "";

    $scope.queryType = "All";

    $scope.initSearch = function () {
        searchService.setQuery($scope.query);
        searchService.setQueryType($scope.queryType);
        $location.path("/search");
        $route.reload();
        $scope.query = "";
    };
});