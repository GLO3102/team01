movieApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/movies', {"templateUrl": "app/components/movie/views/movie.html"})
            .when("/movies/{movieId}",
                {
                    templateUrl: "app/components/views/movieDetail.html",
                    controller: "movie-detail-controller"
                });
    }]);
