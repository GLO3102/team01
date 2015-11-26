
searchApp.controller("search-controller", function ($scope, $route, $location, searchService) {

    $scope.query = "";

    $scope.queryType = {
        availableOptions :[
        {id: '1', name: 'All'},
        {id: '2', name: 'Movies'},
        {id: '3', name: 'TvShows'},
        {id: '4', name: 'Actors'},
        {id: '5', name: 'Users'}
        ],
        selectedOption: {id: '1', name: 'All'}
    };

    $scope.initSearch = function () {
        searchService.setQuery($scope.query);
        searchService.setQueryType($scope.queryType.selectedOption.id);
        $location.path("/search");
        $route.reload();
        $scope.query = "";
    };
});