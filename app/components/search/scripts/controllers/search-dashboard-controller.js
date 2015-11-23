
searchApp.controller("search-dashboard-controller", function ($scope, $location, movieSelectionService, tvshowSelectionService, searchResource, searchService) {

    $scope.query = "";

    $scope.time = new Date();

    $scope.maxQuantity = 10;

    $scope.movieResult = [];

    $scope.tvshowResult = [];

    $scope.actorResult = [];

    $scope.isMovieLoading = false;

    $scope.isTvShowLoading = false;

    $scope.isActorLoading = false;


    $scope.initSearch = function () {
        //$scope.clearResult();

        $scope.movieSearch();
        $scope.tvshowSearch();
        $scope.actorSearch();

        $location.path("/search").replace();

    };

    $scope.clearResult = function () {
        $scope.movieResult = [];
        $scope.tvshowResult = [];
        $scope.actorResult = [];
    };

    $scope.loadResult = function () {
        $scope.movieResult = searchService.getMovieResults();
        $scope.tvshowResult = searchService.getTvShowResults();
        $scope.actorResult = searchService.getActorResults();
    };

    $scope.movieSearch = function () {
        $scope.isMovieLoading = true;

        searchResource.searchMovie({
            "q": $scope.query
        }, function onSuccess(successData) {
            for (var i = 0; i < successData.resultCount; i++) {
                $scope.movieResult.push({"movies": successData.results[i], "genre": successData.results[i].primaryGenreName});
                $scope.isMovieLoading = false;
            }
            searchService.setMovieResults($scope.movieResult);
            console.log($scope.movieResult);
        });

    };

    $scope.tvshowSearch = function () {
        $scope.isTvShowLoading = true;

        searchResource.searchTvShows({
            "q": $scope.query
        }, function onSuccess(successData) {
            $scope.tvshowResult = successData.results;
            searchService.setTvShowResults($scope.tvshowResult);
            $scope.isTvShowLoading = false;
        });
    };

    $scope.actorSearch = function () {
        $scope.isActorLoading = true;

        searchResource.searchActor({
            "q": $scope.query
        }, function onSuccess(successData) {
            $scope.actorResult = successData.results;
            searchService.setActorResults($scope.actorResult);
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
    $scope.loadResult();
});