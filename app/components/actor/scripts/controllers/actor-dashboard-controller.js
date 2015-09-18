/**
 * Created by pascal on 18/09/15.
 */
actorApp.controller("actor-dashboard-controller", function ($scope, actorSelectionService) {
    var staticActor = {
        "wrapperType": "artist",
        "artistType": "Artist",
        "artistName": "John Sawyer",
        "artistLinkUrl": "https://itunes.apple.com/us/artist/john-sawyer/id253584821?uo=4",
        "artistId": 253584821,
        "amgArtistId": 122340,
        "primaryGenreName": "Tribute",
        "primaryGenreId": 100022,
        "radioStationUrl": "https://itunes.apple.com/station/idra.253584821"
    };

    var staticMovie = {
        "wrapperType": "track",
        "kind": "feature-movie",
        "trackId": 555667460,
        "artistName": "Steven Hentges",
        "trackName": "Fangoria FrightFest Presents - Hunger",
        "trackCensoredName": "Fangoria FrightFest Presents - Hunger",
        "trackViewUrl": "https://itunes.apple.com/us/movie/fangoria-frightfest-presents/id555667460?uo=4",
        "previewUrl": "http://a775.v.phobos.apple.com/us/r30/Video4/v4/a6/90/df/a690df58-fddf-300f-db83-6986bfcae99b/mzvf_2939135758551832249.640x480.h264lc.D2.p.m4v",
        "artworkUrl30": "http://is1.mzstatic.com/image/pf/us/r30/Video/v4/7f/24/6e/7f246e2d-c1a9-aaa5-7045-1474074aeab5/mza_4874950162432788650.30x30-50.jpg",
        "artworkUrl60": "http://is5.mzstatic.com/image/pf/us/r30/Video/v4/7f/24/6e/7f246e2d-c1a9-aaa5-7045-1474074aeab5/mza_4874950162432788650.60x60-50.jpg",
        "artworkUrl100": "http://is2.mzstatic.com/image/pf/us/r30/Video/v4/7f/24/6e/7f246e2d-c1a9-aaa5-7045-1474074aeab5/mza_4874950162432788650.100x100-75.jpg",
        "collectionPrice": 9.99,
        "trackPrice": 9.99,
        "collectionHdPrice": 12.99,
        "trackHdPrice": 12.99,
        "releaseDate": "2011-09-28T07:00:00Z",
        "collectionExplicitness": "notExplicit",
        "trackExplicitness": "notExplicit",
        "trackTimeMillis": 6088005,
        "country": "USA",
        "currency": "USD",
        "primaryGenreName": "Horror",
        "contentAdvisoryRating": "R",
        "longDescription": "Five strangers awaken to find themselves trapped in an underground dungeon. They soon realize they are the subjects of one man's sadistic experiment to test the depths of a human being's will to survive. As the days go by with no means of escape, their hunger increases as their humanity fades away.",
        "radioStationUrl": "https://itunes.apple.com/station/idra.555667460"
    };

    $scope.actor = [staticActor];

    $scope.selectActor = function (selectedActor){
        actorSelectionService.setSelectedActor($scope.actor[0]);
    };

});