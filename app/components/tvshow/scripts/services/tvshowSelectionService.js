/**
 * Created by Jean-Sebastien on 2015-09-17.
 */

tvShowApp.service("tvshowSelectionService", function ($rootScope) {
    var tvshow = {};
    var tvshowEpisodes = {};

    var getSelectedTvShow = function () {
        return tvshow;
    };

    var getSelectedTvShowEpisodes = function () {
        return tvshowEpisodes;
    };

    var setSelectedTvShow = function (selectedTvShow) {
        tvshow = selectedTvShow;
    };

    var setSelectedTvShowEpisodes = function (selectedTvShowEpisodes) {
        tvshowEpisodes = selectedTvShowEpisodes;
    };

    return {
        getSelectedTvShow: getSelectedTvShow,
        getSelectedTvShowEpisodes: getSelectedTvShowEpisodes,
        setSelectedTvShow: setSelectedTvShow,
        setSelectedTvShowEpisodes: setSelectedTvShowEpisodes
    };
});
