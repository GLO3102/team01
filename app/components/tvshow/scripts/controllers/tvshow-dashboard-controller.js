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
                for (var i = $scope.tvshowsByGenre.length; i < Math.min($scope.tvshowsByGenre.length + $scope.quantity, listOfGenres.length) ; i++) {
                    makeCallAndFilltvShowsByGenre(i, listOfGenres);
                }
            }
        };

        var makeCallAndFilltvShowsByGenre = function(i, listOfGenres){
            tvShowSearchResource.query({
                "genre": listOfGenres[i].id
            }, function onSuccess(data) {
                if ($scope.tvshowsByGenre.length<listOfGenres.length) {
                    $scope.tvshowsByGenre.push({"tvshows": data.results, "genre":  listOfGenres[i].name});
                }
            });
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

