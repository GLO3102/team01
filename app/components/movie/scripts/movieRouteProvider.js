movieApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/movie', {"templateUrl": "components/movie/views/movie.html"}).otherwise({redirectTo: '/'});

    }]);
