tvShowApp.controller("tvshow-detail-controller", function ($scope, $rootScope, tvshowSelectionService, $routeParams, tvShowResource, tvShowEpisodesResource, tvshowCommentResource) {

    var tvShowId = $routeParams.tvshowId;
    $scope.isLoading = false;
    $scope.modalShown = false;

    $scope.initComment = function () {
        tvshowCommentResource.get({id: tvShowId}, function onSuccess(data) {
        $scope.tvshowsComments = data;
        }, function onError(data) {

        });
    };

    $scope.clearTextField = function () {
        document.getElementById("tvshowCommentTextArea").value = '';
    }

    $scope.addComment = function (userComment) {
        var comment = {
            "username": $rootScope.user.username,
            "email": $rootScope.user.email,
            "id": tvShowId,
            "content": userComment,
        }
        tvshowCommentResource.post(comment, function onSuccess(data) {
            $scope.initComment();
            $scope.clearTextField();
        }, function onError(data) {});
    }

    $scope.initTvShowDetail = function () {
        var selectedTvShow = tvshowSelectionService.getSelectedTvShow();
        var selectTvshowEpisodes = tvshowSelectionService.getSelectedTvShowEpisodes();

        if (Object.keys(selectedTvShow).length === 0) {
            $scope.isLoading = true;
            tvShowResource.get({id: tvShowId}, function onSuccess(data) {
                selectedTvShow = data.results[0];
                $scope.tvshow = selectedTvShow;
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
            $scope.isLoading = false;
        }
        $scope.initComment();
    };
    $scope.initTvShowDetail();

    $scope.toggleModal = function (item) {
        console.log(item);
        $scope.episodeModal = item;
        $scope.episodeModal.length = msToTime(item.trackTimeMillis);
        $scope.modalShown = true;
    };

    function msToTime(s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;

        return hrs + 'h ' + mins + 'min ' + secs + 'sec';
    }

});
