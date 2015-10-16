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
                    $scope.genres = successData;

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
            var suffledListOfGenre = arrayShuffler.shuffle(listOfGenres);
            for (var i = 0; i < $scope.quantity; i++) {

                tvShowSearchResource.query({
                    "genre": suffledListOfGenre[i].id
                }, function onSuccess(data) {
                    if (data.resultCount > 0) {
                        verifyGenreIsAlreadyInList(data.results);
                    }
                });
            }
        };

        var verifyGenreIsAlreadyInList = function(results){
            var genre = results[0].primaryGenreName;
            for (var y = 0; y < $scope.tvshowsByGenre.length; y++) {
                if ($scope.tvshowsByGenre[y].genre === genre) {
                    break;
                }
            }
            if (y >= $scope.tvshowsByGenre.length) {
                $scope.tvshowsByGenre.push({"tvshows": results, "genre": genre});
            }
        };

        $(window).scroll(function () {
            if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
                loadTvshowByGenre($scope.genres);
            }
        });
        $scope.initializeTvShowsByGenre();
        $scope.selectTvshow = function (selectedTvShow) {
            tvshowSelectionService.setSelectedTvShow(selectedTvShow);
        };
    });

