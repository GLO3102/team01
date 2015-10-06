tvShowApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/search',
            {
                templateUrl: "components/search/views/search.html",
                controller: "tvshow-dashboard-controller"
            })
    }]);
