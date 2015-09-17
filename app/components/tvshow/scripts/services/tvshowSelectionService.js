/**
 * Created by Jean-Sebastien on 2015-09-17.
 */

tvShowAppApp.service("tvshowelectionService", function ($rootScope) {
    var tvshow = {};

    var getSelectedTvShow = function () {
        return tvshow;
    };

    var setSelectedTvShow = function (selectedTvShow) {
        tvshow = selectedTvShow;
    };

    return {
        getSelectedTvShow: getSelectedTvShow,
        setSelectedTvShow: setSelectedTvShow
    };
});
