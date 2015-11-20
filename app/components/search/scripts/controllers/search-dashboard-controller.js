
searchApp.controller("search-dashboard-controller", function ($scope, $location, movieSelectionService, tvshowSelectionService, searchResource) {

    $scope.query = "";

    $scope.maxQuantity = 10;

    $scope.moviesResult = [];

    $scope.tvshowResult = [];

    $scope.actorResult = [];

    $scope.isMovieLoading = false;

    $scope.isTvShowLoading = false;

    $scope.isActorLoading = false;


    $scope.initSearch = function () {
        $location.path('/search');
        $scope.clearResult();

        $scope.movieSearch();
        $scope.tvshowSearch();
        $scope.actorSearch();
    };

    $scope.clearResult = function () {
        $scope.moviesResult = [];
        $scope.tvshowResult = [];
        $scope.actorResult = [];
};

    $scope.movieSearch = function () {
        $scope.isMovieLoading = true;

        searchResource.searchMovie({
            "q": $scope.query
        }, function onSuccess(successData) {
            $scope.moviesResult = successData.results;
            console.log($scope.moviesResult);
            $scope.isMovieLoading = false;
        });

    };

    $scope.tvshowSearch = function () {
        $scope.isTvShowLoading = true;

        searchResource.searchTvShows({
            "q": $scope.query
        }, function onSuccess(successData) {
            $scope.tvshowResult = successData.results;
            console.log($scope.tvshowResult);
            $scope.isTvShowLoading = false;
        });
    };

    $scope.actorSearch = function () {
        $scope.isActorLoading = true;

        searchResource.searchActor({
            "q": $scope.query
        }, function onSuccess(successData) {
            $scope.actorResult = successData.results;
            console.log($scope.actorResult);
            $scope.isActorLoading = false;
        });
    };

    $scope.selectMovie = function(movie){
        movieSelectionService.setSelectedMovie(movie);
    };

    $scope.selectTvshow=function(tvshow){
        tvshowSelectionService.setSelectedTvShow(tvshow);
    };


    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 20) {
            $scope.didScroll = true;

        }
    });

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