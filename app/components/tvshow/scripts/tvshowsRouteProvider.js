tvShowApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider
<<<<<<< HEAD
            .when('/tv-shows',
                {
                    "templateUrl": "components/tvshow/views/tvshows.html"
                });
=======
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
>>>>>>> 1035876a805d8534fd23a5af2b9bcfa428d9a3a4
    }]);
