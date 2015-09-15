tvShowApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/tv-shows',
                {
                    "templateUrl": "components/tvshow/views/tvshows.html"
                });
    }]);
