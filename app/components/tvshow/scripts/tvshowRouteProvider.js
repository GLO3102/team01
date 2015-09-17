tvShowApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/tvshow',
            {
                "templateUrl": "components/tvshow/views/tvshow.html",
                controller: "tvshow-dashboard-controller"
            })
            .when("/tvshow/:tvshowId",
            {
                templateUrl: "components/tvshow/views/tvshowDetail.html",
                controller: "tvshow-detail-controller"
            });
    }]);