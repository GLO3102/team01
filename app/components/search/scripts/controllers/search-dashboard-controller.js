
searchApp.controller("search-dashboard-controller", function ($scope, $location, searchResource) {

    $scope.query = "";

    $scope.initSearch= function () {
        $location.path('/search');

        searchResource.get({query:$scope.query}, function onSuccess(data) {
            console.log(data);
            $scope.query = "";
        });
    }
});