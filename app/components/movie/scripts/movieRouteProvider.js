movieApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/movies', {"templateUrl": "app/components/movie/views/movie.html"}).otherwise({redirectTo: '/'});

    }]);
