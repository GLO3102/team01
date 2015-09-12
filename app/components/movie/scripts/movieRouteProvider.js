movieApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/movies', {"templateUrl": "components/movie/views/movie.html"}).otherwise({redirectTo: '/'});

    }]);
