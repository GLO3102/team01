tvShowApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/tvshow', {"templateUrl": "components/tvshow/views/tvshow.html"}).otherwise({redirectTo: '/'});

    }]);
