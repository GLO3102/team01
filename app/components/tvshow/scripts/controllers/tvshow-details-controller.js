tvShowApp.controller("tvshow-detail-controller", function ($scope, $rootScope, tvshowSelectionService, $routeParams, tvShowResource, tvShowEpisodesResource, tvShowSimilarResource, tvshowCommentResource,tvShowVideoResource, $location) {

    var tvShowId = $routeParams.tvshowId;
    $scope.isLoading = false;
    $scope.modalShown = false;

    $scope.tvShowError = false;
    $scope.episodesError = false;
    $scope.similarTvshowError = false;
    $scope.videoModalError = false;

    var callSimilar = function (ombdID) {
        $scope.isLoadingSimilar = true;

        tvShowSimilarResource.get({id: ombdID}, function onSuccess(data) {
            $scope.similarTvshows = data;
            $scope.isLoadingSimilar = false;
        }, function onError(data) {
            $scope.similarTvshowError = true;
            $scope.isLoadingSimilar = false;
        });
    };

    $scope.selectTvshow = function (selectedTvShow) {
        movieSelectionService.setSelectedTvShow(selectedTvShow);
        $scope.initTvShowDetail();
    };
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
        }, function onError(data) {
        });
    }

    $scope.initTvShowDetail = function () {
        var selectedTvShow = tvshowSelectionService.getSelectedTvShow();
        var selectTvshowEpisodes = tvshowSelectionService.getSelectedTvShowEpisodes();

        if (Object.keys(selectedTvShow).length === 0) {
            $scope.isLoading = true;
            tvShowResource.get({id: tvShowId}, function onSuccess(data) {
                if (data.resultCount) {
                    selectedTvShow = data.results[0];
                    $scope.tvshow = selectedTvShow;
                    console.log(selectedTvShow);
                    callSimilar(selectedTvShow.omdbId);
                }
                else {
                    $location.path("/lost");
                }
            }, function onError(errorData) {
                $scope.tvShowError = true;
                $scope.isLoading = false;
            });
        } else {
            $scope.tvshow = selectedTvShow;
            console.log(selectedTvShow);
            callSimilar(selectedTvShow.omdbId);
        }

        if (Object.keys(selectTvshowEpisodes).length === 0) {
            tvShowEpisodesResource.get({id: tvShowId}, function onSuccess(data) {
                if (data.resultCount) {
                    selectTvshowEpisodes = data;

                    $scope.tvshowEpisodes = selectTvshowEpisodes;
                    $scope.isLoading = false;
                } else {
                    $location.path("/lost");
                }
            }, function onError(errorData) {
                $scope.episodesError = true;
                $scope.isLoading = false;
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
        var regex = /\d$/;
        var seasonNumberExtract = regex.exec(item.collectionName);
        console.log("SEASON "+seasonNumberExtract + " OMBD "+ $scope.tvshow.omdbId + " TRACKNUM "+item.trackNumber);
        $scope.episodeModal = item;
        tvShowVideoResource.get({id:$scope.tvshow.omdbId,seasonNumber: seasonNumberExtract, episodeNumber : item.trackNumber },
            function onSuccess(data) {
                console.log(data);
                $scope.episodeModal.previewUrl = data.previewUrl;
            }
        , function onError(errorData) {
            $scope.videoModalError = true;
        });
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

    $scope.slickFeatureConfig = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        centerMode: false,
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
