/**
 * Created by Antoine on 2015-09-15.
 */
movieApp.controller("movie-dashboard-controller",
    function ($scope, movieSelectionService, genreResource, movieSearchResource, arrayShuffler) {
        $scope.quantity = 5;

        $scope.isLoading = false;

        $scope.moviesByGenre = [];

        $scope.didScroll=false;

        $scope.initializeMoviesByGenre = function () {
            $scope.isLoading = true;

            $scope.genres = movieSelectionService.getMovieSearchResults();

            if ($scope.genres.length === 0) {
                genreResource.query({"type": "movies"}, function onSuccess(successData) {

                    $scope.genres = arrayShuffler.shuffle(successData);

                    movieSelectionService.setMovieSearchResults($scope.genres);

                    loadMoviesByGenre($scope.genres);
                    $scope.isLoading = false;
                });
            }
            else {
                loadMoviesByGenre($scope.genres);
                $scope.isLoading = false;
            }
        };
        var loadMoviesByGenre = function (listOfGenres) {
            console.log(listOfGenres);
            if (listOfGenres.length !== $scope.moviesByGenre.length) {
                for (var i = $scope.moviesByGenre.length; i < Math.min($scope.moviesByGenre.length + $scope.quantity, listOfGenres.length); i++) {
                    console.log(listOfGenres.length+"  i : "+i+" "+listOfGenres[i].name);
                    makeCallAndFillmoviesByGenre(i, listOfGenres);
                }
            }
        };

        var makeCallAndFillmoviesByGenre = function (i, listOfGenres) {
            movieSearchResource.query({
                "genre": listOfGenres[i].id
            }, function onSuccess(data) {
                console.log(listOfGenres[i].name);
                console.log(data);
                if ($scope.moviesByGenre.length < listOfGenres.length) {
                    $scope.moviesByGenre.push({"movies": data.results, "genre": listOfGenres[i].name});
                }
            });
        };

        //var verifyGenreIsAlreadyInList = function (results) {
        //    var genre = results[0].primaryGenreName;
        //    for (var y = 0; y < $scope.moviesByGenre.length; y++) {
        //        if ($scope.moviesByGenre[y].genre === genre) {
        //            $scope.quantity += 1;
        //            break;
        //        }
        //    }
        //    if (y >= $scope.moviesByGenre.length) {
        //        $scope.moviesByGenre.push({"movies": results, "genre": genre});
        //    }
        //};

        $(window).scroll(function () {
            if ($(window).scrollTop() >= $(document).height() - $(window).height() - 20) {
                //loadMoviesByGenre($scope.genres);
                $scope.didScroll = true;
            }
        });

        setInterval(function() {
            if($scope.didScroll === true) {
                $scope.didScroll = false;
                loadMoviesByGenre($scope.genres);
            }
        }, 500);

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
                        slidesToScroll: 1,
                        infinite: true,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        autoplay: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        autoplay: true
                    }
                }]
        };
    });