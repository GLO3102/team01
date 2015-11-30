
searchApp.controller("search-dashboard-controller", function ($scope, movieSelectionService, tvshowSelectionService, actorSelectionService, searchService, searchResource) {

    $scope.query = "";

    $scope.queryType = [];

    $scope.movieResult = [];

    $scope.tvshowResult = [];

    $scope.actorResult = [];

    $scope.userResult = [];

    $scope.movieGenre = {
        availableOptions :[
            {id: 42, name: 'All'}
        ],
        selectedOption: {id: 42, name: 'All'}
    };

    $scope.tvshowGenre = {
        availableOptions :[
            {id: 42, name: 'All'}
        ],
        selectedOption: {id: 42, name: 'All'}
    };

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
        //$scope.userSearch();
    };

    $scope.search = function (queryType) {
        if (queryType === "1"){
            $scope.showMovieResult = true;
            $scope.showTvShowResult = true;
            $scope.showActorResult = true;
            $scope.showUserResult = true;
            $scope.searchAll();
        }
        if (queryType === "2"){
            $scope.showMovieResult = true;
            $scope.movieSearch();
        }
        if (queryType === "3"){
            $scope.showTvShowResult = true;
            $scope.tvshowSearch();
        }
        if (queryType === "4"){
            $scope.showActorResult = true;
            $scope.actorSearch();
        }
        if (queryType === "5"){
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
                if (!$scope.isMovieGenrePresent(successData.results[i].primaryGenreName)){
                    $scope.movieGenre.availableOptions.push({
                        "id": i,
                        "genre": successData.results[i].primaryGenreName});
                }
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
                if (!$scope.isTvshowGenrePresent(successData.results[i].primaryGenreName)) {
                    $scope.tvshowGenre.availableOptions.push({
                        "id": i,
                        "genre": successData.results[i].primaryGenreName});
                }
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

    $scope.userSearch = function () {
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

    $scope.isMovieGenrePresent = function(genre){
        var res = false;
        if($.inArray(genre, $scope.movieGenre.availableOptions.name)>=0){
            res = true;
        }
        return res
    };

    $scope.isTvshowGenrePresent = function(genre){
        var res = false;
        if($.inArray( genre, $scope.tvshowGenre.availableOptions.name)>=0){
            res = true;
        }
        return res
    };

    $scope.movieFilter = function (result) {
        var res = false;
        if ($scope.movieGenre.selectedOption.name === "All"){
            res = true;
        }
        else{
            res = ($scope.movieGenre.selectedOption.name === result.genre)
        }
        return res
    };

    $scope.tvshowFilter = function (result) {
        var res = false;
        if ($scope.tvshowGenre.selectedOption.name === "All"){
            res = true;
        }
        else{
            res = ($scope.tvshowGenre.selectedOption.name === result.genre)
        }
        return res
    };

    $scope.query = searchService.getQuery();
    $scope.queryType.push(searchService.getQueryType());

    console.log($scope.queryType);

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