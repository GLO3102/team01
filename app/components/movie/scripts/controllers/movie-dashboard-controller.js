/**
 * Created by Antoine on 2015-09-15.
 */
movieApp.controller("movie-dashboard-controller",
    function ($scope, movieSelectionService, genreResource, movieSearchResource, arrayShuffler) {
        $scope.quantity = 5;

        $scope.isLoading = false;

        $scope.moviesByGenre = [];

        $scope.didScroll = false;

        $scope.initializeMoviesByGenre = function () {
            $scope.isLoading = true;

            $scope.genres = movieSelectionService.getMovieGenresResults();

            if ($scope.genres.length === 0) {
                genreResource.query({"type": "movies"}, function onSuccess(successData) {

                    $scope.genres = arrayShuffler.shuffle(successData);

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
            //console.log(listOfGenres);
            if (listOfGenres.length !== $scope.moviesByGenre.length) {
                for (var i = $scope.moviesByGenre.length; i < Math.min($scope.moviesByGenre.length + $scope.quantity, listOfGenres.length); i++) {
                    makeCallAndFillmoviesByGenre(i, listOfGenres);
                }
            }
        };

        var makeCallAndFillmoviesByGenre = function (i, listOfGenres) {
            movieSearchResource.query({
                "genre": listOfGenres[i].id
            }, function onSuccess(data) {
                if ($scope.moviesByGenre.length < listOfGenres.length) {
                    $scope.moviesByGenre.push({"movies": data.results, "genre": listOfGenres[i].name});
                }

            });

        };


        $(window).scroll(function () {
            if ($(window).scrollTop() >= $(document).height() - $(window).height() - 20) {
                //loadMoviesByGenre($scope.genres);
                $scope.didScroll = true;

            }
        });

        setInterval(function () {
            if ($scope.didScroll === true) {
                $scope.didScroll = false;
                loadMoviesByGenre($scope.genres);
            }
        }, 2000);

        $scope.initializeMoviesByGenre();

        $scope.selectMovie = function (selectedMovie) {
            movieSelectionService.setSelectedMovie(selectedMovie);
        };

        $scope.slickFeatureConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            variableWidth: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false
                    }
                }]
        };
    });