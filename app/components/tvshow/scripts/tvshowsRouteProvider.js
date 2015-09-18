tvShowApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/tvshows',
                {
                    templateUrl: "components/tvshow/views/tvshow.html",
                    controller: "tvshow-dashboard-controller"
                })
            .when("/tvshows/:tvshowId",
            {
                templateUrl: "components/tvshow/views/tvshowDetail.html",
                controller: "tvshow-detail-controller"
            });
    }]);
