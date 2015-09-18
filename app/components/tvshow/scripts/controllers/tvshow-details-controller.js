/**
 * Created by Jean-Sebastien on 2015-09-17.
 */
tvShowApp.controller("tvshow-detail-controller", function ($scope, tvshowSelectionService) {

    $scope.tvshow = tvshowSelectionService.getSelectedTvShow();
    $scope.tvshowEpisodes = tvshowSelectionService.getSelectedTvShowEpisodes();


});
