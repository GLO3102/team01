/**
 * Created by Antoine on 2015-09-15.
 */
movieApp.controller("movie-dashboard-controller",
    function ($scope, movieSelectionService, genreResource, movieSearchResource, arrayShuffler) {
        $scope.quantity = 5;

        $scope.isLoading = false;

        $scope.moviesByGenre = [];

        $scope.initializeMoviesByGenre = function () {
            $scope.isLoading = true;

            $scope.genres = movieSelectionService.getMovieGenresResults();

            if ($scope.genres.length === 0) {
                genreResource.query({"type": "movies"}, function onSuccess(successData) {
                    $scope.genres = successData;

                    movieSelectionService.setMovieGenresResults($scope.genres);

                    loadMoviesByGenre($scope.genres);
                    $scope.isLoading = false;
                });
            }
            else {
                $scope.moviesByGenre = movieSelectionService.getMovieSearchResults();
                if ($scope.moviesByGenre.length === 0) {
                    loadMoviesByGenre($scope.genres);
                }
                $scope.isLoading = false;
            }
        };
        var loadMoviesByGenre = function (listOfGenres) {
            arrayShuffler.shuffle(listOfGenres);
            for (var i = 0; i < $scope.quantity; i++) {

                movieSearchResource.query({
                    "genre": listOfGenres[i].id
                }, function onSuccess(data) {
                    if (data.results.length > 0) {
                        verifyGenreIsAlreadyInList(data.results);
                    }
                });
            }
            $scope.quantity = 5;
        };

        var verifyGenreIsAlreadyInList = function (results) {
            var genre = results[0].primaryGenreName;
            for (var y = 0; y < $scope.moviesByGenre.length; y++) {
                if ($scope.moviesByGenre[y].genre === genre) {
                    $scope.quantity += 1;
                    break;
                }
            }
            if (y >= $scope.moviesByGenre.length) {
                $scope.moviesByGenre.push({"movies": results, "genre": genre});
                movieSelectionService.setMovieSearchResults($scope.moviesByGenre);
            }
        };

        $(window).scroll(function () {
            if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
                loadMoviesByGenre($scope.genres);
            }
        });
        $scope.initializeMoviesByGenre();

        $scope.selectMovie = function (selectedMovie) {
            movieSelectionService.setSelectedMovie(selectedMovie);
        };
    });