


tvShowApp.controller("tvshow-detail-controller", function ($scope, tvshowSelectionService, $routeParams, tvShowResource, tvShowEpisodesResource) {

    var tvShowId = $routeParams.tvshowId;
    $scope.isLoading = false;

    $scope.initTvShowDetail = function () {
        var selectedTvShow = tvshowSelectionService.getSelectedTvShow();
        var selectTvshowEpisodes = tvshowSelectionService.getSelectedTvShowEpisodes();

        if (Object.keys(selectedTvShow).length === 0) {
            $scope.isLoading = true;
            tvShowResource.get({id: tvShowId}, function onSuccess(data) {
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

});
