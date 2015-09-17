movieApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/movies',
                {
                    "templateUrl": "components/movie/views/movie.html",
                    controller: "movie-dashboard-controller"
                })
            .when("/movies/:movieId",
                {
                    templateUrl: "components/movie/views/movieDetail.html",
                    controller: "movie-detail-controller"
                });
    }]);
