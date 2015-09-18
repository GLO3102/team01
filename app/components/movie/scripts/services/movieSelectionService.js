/**
 * Created by Antoine on 2015-09-15.
 */
movieApp.service("movieSelectionService", function ($rootScope) {
    var movie = {};

    var getSelectedMovie = function () {
        if( Object.keys(movie).length === 0){
            movie = {
                "wrapperType": "track",
                "kind": "feature-movie",
                "trackId": 265727087,
                "artistName": "James Wan",
                "trackName": "Saw",
                "trackCensoredName": "Saw",
                "trackViewUrl": "https://itunes.apple.com/us/movie/saw/id265727087?uo=4",
                "previewUrl": "http://a978.v.phobos.apple.com/us/r1000/097/Video/a6/aa/f2/mzm.jszrvyyu..640x360.h264lc.D2.p.m4v",
                "artworkUrl30": "http://is4.mzstatic.com/image/thumb/Music/af/37/e2/dj.fsfobjrm.jpg/30x30bb-85.jpg",
                "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Music/af/37/e2/dj.fsfobjrm.jpg/60x60bb-85.jpg",
                "artworkUrl100": "http://is3.mzstatic.com/image/thumb/Music/af/37/e2/dj.fsfobjrm.jpg/100x100bb-85.jpg",
                "collectionPrice": 9.99,
                "trackPrice": 9.99,
                "trackRentalPrice": 2.99,
                "collectionHdPrice": 12.99,
                "trackHdPrice": 12.99,
                "trackHdRentalPrice": 3.99,
                "releaseDate": "2004-10-29T07:00:00Z",
                "collectionExplicitness": "notExplicit",
                "trackExplicitness": "notExplicit",
                "trackTimeMillis": 6187486,
                "country": "USA",
                "currency": "USD",
                "primaryGenreName": "Horror",
                "contentAdvisoryRating": "R",
                "longDescription": "Would you die to live? That's what two men, Adam (Leigh Whannell) and Gordon (Cary Elwes), have to ask themselves when they're paired up in a deadly situation. Abducted by a serial killer, they're trapped up in a prison constructed with such ingenuity that they may not be able to escape before their captor decides it's time to dismantle their bodies in his signature way. Attempting to break free may kill them, but staying definitely will.",
                "radioStationUrl": "https://itunes.apple.com/station/idra.265727087"
            };
        }
        return movie;
    };

    var setSelectedMovie = function (selectedMovie) {
        movie = selectedMovie;
    };

    return {
        getSelectedMovie: getSelectedMovie,
        setSelectedMovie: setSelectedMovie
    };
});