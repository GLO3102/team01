


tvShowApp.controller("tvshow-detail-controller", function ($scope, tvshowSelectionService, $routeParams, tvShowResource, tvShowEpisodesResource) {

    var tvShowId = $routeParams.tvshowId;
    $scope.isLoading = false;

    $scope.initTvShowDetail = function () {
        var selectedTvShow = tvshowSelectionService.getSelectedTvShow();
        var selectTvshowEpisodes = tvshowSelectionService.getSelectedTvShowEpisodes();

        if (Object.keys(selectedTvShow).length === 0) {
            $scope.isLoading = true;
            tvShowResource.get({id: tvShowId}, function onSuccess(data) {
                console.log(data.results[0]);
                selectedTvShow = data.results[0];

                $scope.tvshow = selectedTvShow;
                $scope.isLoading = false;
            }, function onError(data) {

            });
        } else {
            $scope.tvshow = selectedTvShow;
        }

        if (Object.keys(selectTvshowEpisodes).length === 0) {
            tvShowEpisodesResource.get({id: tvShowId}, function onSuccess(data) {
                console.log(data);
                selectTvshowEpisodes = data;

                $scope.tvshowEpisodes = selectTvshowEpisodes;
                $scope.isLoading = false;
            }, function onError(data) {
            });
        }
        else {
            $scope.tvshowEpisodes = selectTvshowEpisodes;
        }
    };
    $scope.initTvShowDetail();
    $scope.isHdPriceSelected = true;

    $scope.showHdPrice = function (priceButtonState) {
        $scope.isHdPriceSelected = priceButtonState;
    };


});
