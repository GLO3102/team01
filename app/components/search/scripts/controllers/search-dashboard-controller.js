
searchApp.controller("search-dashboard-controller", function ($scope, movieSelectionService, tvshowSelectionService, actorSelectionService, searchService, searchResource) {

    $scope.query = "";

    $scope.queryFilter = ["Movies", "TvShows", "Actors"];

    $scope.movieResult = [];

    $scope.tvshowResult = [];

    $scope.actorResult = [];

    $scope.userResult = [];

    $scope.isMovieLoading = false;

    $scope.isTvShowLoading = false;

    $scope.isActorLoading = false;

    $scope.isUserLoading = false;

    $scope.isMovieSearch = false;

    $scope.isTvShowSearh = false;

    $scope.isActorSearch = false;

    $scope.isUserSearch= false;

    $scope.initSearch = function () {
        $scope.searchAll();
    };

    $scope.searchAll = function () {
        $scope.movieSearch();
        $scope.tvshowSearch();
        //$scope.actorSearch();
    };

    $scope.movieSearch = function () {
        $scope.isMovieLoading = true;
        searchResource.searchMovie({
            "q": $scope.query
        }, function onSuccess(successData) {
            for (var i = 0; i < successData.resultCount; i++) {
                $scope.movieResult.push({"movie": successData.results[i], "genre": successData.results[i].primaryGenreName});
            }
            $scope.isMovieLoading = false;
            console.log($scope.movieResult);
        });
    };

    $scope.tvshowSearch = function () {
        $scope.isTvShowLoading = true;
        searchResource.searchTvShows({
            "q": $scope.query
        }, function onSuccess(successData) {
            for (var i = 0; i < successData.resultCount; i++) {
                $scope.tvshowResult.push({"tvshow": successData.results[i], "genre": successData.results[i].primaryGenreName});
            }
            $scope.isTvShowLoading = false;
            console.log($scope.tvshowResult);
        });
    };

    $scope.actorSearch = function () {
        $scope.isActorLoading = true;
        searchResource.searchActor({
            "q": $scope.query
        }, function onSuccess(successData) {
            for (var i = 0; i < successData.resultCount; i++) {
                $scope.actorResult.push({"actor": successData.results[i]});
            }
            $scope.isActorLoading = false;
            console.log($scope.actorResult);
        });
    };

    $scope.selectMovie = function(movie){
        movieSelectionService.setSelectedMovie(movie);
    };

    $scope.selectTvshow = function(tvshow){
        tvshowSelectionService.setSelectedTvShow(tvshow);
    };

    $scope.selectActor = function(actor){
        tvshowSelectionService.setSelectedTvShow(actor);
    };

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 20) {
            $scope.didScroll = true;
        }
    });

    $scope.query = searchService.getQuery();
    if ($scope.query !== ""){
        $scope.initSearch();
    }

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