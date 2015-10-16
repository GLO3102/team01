/**
 * Created Jean-Sebastien on 2015-09-17.
 */
tvShowApp.controller("tvshow-dashboard-controller",
    function ($scope, tvshowSelectionService, genreResource, tvShowSearchResource, arrayShuffler) {
        $scope.quantity = 5;

        $scope.isLoading = false;


        $scope.tvshowsByGenre = [];

        $scope.initializeTvShowsByGenre = function () {
            $scope.isLoading = true;

            $scope.genres = tvshowSelectionService.getTvshowSearchResults();

            if ($scope.genres.length === 0) {
                genreResource.query({"type": "tvshows"}, function onSuccess(successData) {
                    $scope.genres = arrayShuffler.shuffle(successData);
                    tvshowSelectionService.setTvshowSearchResults($scope.genres);

                    loadTvshowByGenre($scope.genres);

                    $scope.isLoading = false;
                });

            }
            else {
                loadTvshowByGenre($scope.genres);
                $scope.isLoading = false;
            }
        };
        var loadTvshowByGenre = function (listOfGenres) {
            if (listOfGenres.length !== $scope.tvshowsByGenre.length) {

                for (var i = $scope.tvshowsByGenre.length; i < ($scope.tvshowsByGenre.length + $scope.quantity); i++) {
                    console.log($scope.genres[i].id, "i : " + i);
                    tvShowSearchResource.query({
                        "genre": $scope.genres[i].id
                    }, function onSuccess(data) {
                        if (data.resultCount > 0) {
                            verifyGenreIsAlreadyInList(data.results);
                        }
                    });
                }
                $scope.quantity = 5;
            }
        };

        var verifyGenreIsAlreadyInList = function (results) {
            var genre = results[0].primaryGenreName;
            for (var y = 0; y < $scope.tvshowsByGenre.length; y++) {
                if ($scope.tvshowsByGenre[y].genre === genre) {
                    $scope.quantity += 1;
                    break;
                }
            }
            if (y >= $scope.tvshowsByGenre.length) {
                $scope.tvshowsByGenre.push({"tvshows": results, "genre": genre});
            }
        };
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $(document).height() - $(window).height() - 20) {
                loadTvshowByGenre($scope.genres);
            }
        });
        $scope.initializeTvShowsByGenre();
        $scope.selectTvshow = function (selectedTvShow) {
            tvshowSelectionService.setSelectedTvShow(selectedTvShow);
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

