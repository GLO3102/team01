
searchApp.controller("search-dashboard-controller", function ($scope, movieSelectionService, tvshowSelectionService, searchService, searchResource) {

    $scope.query = "";

    $scope.queryType = [];

    $scope.movieResult = [];

    $scope.tvshowResult = [];

    $scope.actorResult = [];

    $scope.actorDetailsResult = [];

    $scope.userResult = {};

    $scope.movieGenre = ["All"];

    $scope.movieFilterSelected = $scope.movieGenre[0];

    $scope.tvshowGenre = ["All"];

    $scope.tvshowFilterSelected =  $scope.tvshowGenre[0];

    $scope.isMovieLoading = false;

    $scope.isTvShowLoading = false;

    $scope.isActorLoading = false;

    $scope.isUserLoading = false;

    $scope.showMovieResult = false;

    $scope.showTvShowResult = false;

    $scope.showActorResult = false;

    $scope.showUserResult = false;


    $scope.initSearch = function () {
        for (var i = 0; i < $scope.queryType.length; i++) {
            $scope.search($scope.queryType[i]);
        }
    };

    $scope.searchAll = function () {
        $scope.movieSearch();
        $scope.tvshowSearch();
        $scope.actorSearch();
        $scope.userSearch();
    };

    $scope.search = function (queryType) {
        if (queryType === "All"){
            $scope.showMovieResult = true;
            $scope.showTvShowResult = true;
            $scope.showActorResult = true;
            $scope.showUserResult = true;
            $scope.searchAll();
        }
        if (queryType === "Movies"){
            $scope.showMovieResult = true;
            $scope.movieSearch();
        }
        if (queryType === "TvShows"){
            $scope.showTvShowResult = true;
            $scope.tvshowSearch();
        }
        if (queryType === "Actors"){
            $scope.showActorResult = true;
            $scope.actorSearch();
        }
        if (queryType === "Users"){
            $scope.showUserResult = true;
            $scope.userSearch();
        }
    };

    $scope.movieSearch = function () {
        $scope.isMovieLoading = true;
        searchResource.searchMovie({
            "q": $scope.query
        }, function onSuccess(successData) {
            for (var i = 0; i < successData.resultCount; i++) {
                $scope.movieResult.push({"movie": successData.results[i], "genre": successData.results[i].primaryGenreName});
            }
            $scope.uniqueMovieGenre();
            $scope.isMovieLoading = false;
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
            $scope.uniqueTvshowGenre();
            $scope.isTvShowLoading = false;
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
        });
    };

    $scope.userSearch = function () {
        $scope.isUserLoading = true;
        searchResource.searchUser({
            "q": $scope.query
        }, function onSuccess(successData) {
            $scope.userResult = successData;
            $scope.isUserLoading = false;
            console.log($scope.userResult);
        });
    };

    $scope.selectMovie = function(movie){
        movieSelectionService.setSelectedMovie(movie);
    };

    $scope.selectTvshow = function(tvshow){
        tvshowSelectionService.setSelectedTvShow(tvshow);
    };


    $scope.uniqueMovieGenre = function(){
        $.each($scope.movieResult, function(index, value){
            if($.inArray(value.genre, $scope.movieGenre) === -1) {
                $scope.movieGenre.push(value.genre);
            }
        });
    };

    $scope.uniqueTvshowGenre = function(){
        $.each($scope.tvshowResult, function(index, value){
            if($.inArray(value.genre, $scope.tvshowGenre) === -1) {
                $scope.tvshowGenre.push(value.genre);
            }
        });
    };

    $scope.filterMovieResult = function (genre) {
        var filterResult = [];

        if (genre === "All"){
            filterResult = $scope.movieResult
        }
        else{
            for (var i=0; i < $scope.movieResult.length; i++){
                if ($scope.movieResult[i].genre === genre){
                    filterResult.push($scope.movieResult[i])
                }
            }
        }
        return filterResult
    };

    $scope.filterTvshowResult = function (genre) {
        var filterResult = [];

        if (genre === "All"){
            filterResult = $scope.tvshowResult
        }
        else{
            for (var i=0; i < $scope.tvshowResult.length; i++){
                if ($scope.tvshowResult[i].genre === genre){
                    filterResult.push($scope.tvshowResult[i])
                }
            }
        }
        return filterResult
    };

    $scope.query = searchService.getQuery();
    $scope.queryType.push(searchService.getQueryType());

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