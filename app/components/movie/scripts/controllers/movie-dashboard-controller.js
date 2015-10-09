/**
 * Created by Antoine on 2015-09-15.
 */
movieApp.controller("movie-dashboard-controller", function ($scope, movieSelectionService, genreResource, movieSearchResource) {
    $scope.quantity = 5;

    $scope.isLoading = false;

    $scope.moviesByGenre = [];

    $scope.initializeMoviesByGenre = function () {
        $scope.isLoading = true;

        $scope.genres = movieSelectionService.getMovieSearchResults();

        if ($scope.genres.length === 0) {
            genreResource.query({"type": "movies"}, function onSuccess(successData) {
                $scope.genres = successData;

                movieSelectionService.setMovieSearchResults($scope.genres);

                loadMoviesByGenre($scope.genres);
                $scope.isLoading = false;
            });
        }
        else{
            loadMoviesByGenre($scope.genres);
            $scope.isLoading = false;
        }
    };
    var loadMoviesByGenre = function(listOfGenres){

        for (var i = 0; i < listOfGenres.length; i++) {

            movieSearchResource.query({
                "genre": listOfGenres[i].id
            }, function onSuccess(data) {
                console.log(data);
                $scope.moviesByGenre.push(data);
            });

        }
    };

    $scope.initializeMoviesByGenre();

    $scope.selectMovie = function (selectedMovie) {
        movieSelectionService.setSelectedMovie(selectedMovie);
    };
});