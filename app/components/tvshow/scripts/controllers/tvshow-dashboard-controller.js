/**
 * Created Jean-Sebastien on 2015-09-17.
 */
tvShowApp.controller("tvshow-dashboard-controller", function ($scope, tvshowSelectionService) {
    var staticTvShow = {
        "wrapperType": "track",
        "kind": "tv-episode",
        "artistId": 190066649,
        "collectionId": 329363662,
        "trackId": 336977484,
        "artistName": "Grey's Anatomy",
        "collectionName": "Grey's Anatomy, Season 6",
        "trackName": "I Saw What I Saw",
        "collectionCensoredName": "Grey's Anatomy, Season 6",
        "trackCensoredName": "I Saw What I Saw",
        "artistViewUrl": "https://itunes.apple.com/us/tv-show/greys-anatomy/id190066649?uo=4",
        "collectionViewUrl": "https://itunes.apple.com/us/tv-season/i-saw-what-i-saw/id329363662?i=336977484&uo=4",
        "trackViewUrl": "https://itunes.apple.com/us/tv-season/i-saw-what-i-saw/id329363662?i=336977484&uo=4",
        "previewUrl": "http://a1331.v.phobos.apple.com/us/r1000/049/Video6/v4/18/de/68/18de6853-a43c-a06d-5f58-9bb9829c54ac/mzvf_9111280022047488086.640x480.h264lc.D2.p.m4v",
        "artworkUrl30": "http://is1.mzstatic.com/image/pf/us/r30/Features/f2/0f/45/dj.aykngeft.40x30-75.jpg",
        "artworkUrl60": "http://is4.mzstatic.com/image/pf/us/r30/Features/f2/0f/45/dj.aykngeft.80x60-75.jpg",
        "artworkUrl100": "http://is4.mzstatic.com/image/pf/us/r30/Features/f2/0f/45/dj.aykngeft.100x100-75.jpg",
        "collectionPrice": 19.99,
        "trackPrice": 1.99,
        "collectionHdPrice": 24.99,
        "trackHdPrice": 2.99,
        "releaseDate": "2009-10-22T07:00:00Z",
        "collectionExplicitness": "notExplicit",
        "trackExplicitness": "notExplicit",
        "discCount": 1,
        "discNumber": 1,
        "trackCount": 24,
        "trackNumber": 6,
        "trackTimeMillis": 2610235,
        "country": "USA",
        "currency": "USD",
        "primaryGenreName": "Drama",
        "contentAdvisoryRating": "TV-14",
        "shortDescription": "After a burn victim unexpectedly dies in the ER, the Chief and board member Jennings question the residents, as all the staff members defend their actions in an effort to save their jobs.",
        "longDescription": "After a burn victim unexpectedly dies in the ER, the Chief and board member Jennings question the residents, as all the staff members defend their actions in an effort to save their jobs.",
        "radioStationUrl": "https://itunes.apple.com/station/idra.336977484"
    };

    $scope.tvshows = [staticTvShow];

    $scope.selectTvShow = function (selectedTvShow) {
        tvshowSelectionService.setSelectedTvShow($scope.tvshows[0]);
    };

});
