/**
 * Created Jean-Sebastien on 2015-09-17.
 */
tvShowApp.controller("tvshow-dashboard-controller", function ($scope, tvshowSelectionService) {
    var staticTvShow = {
        "wrapperType": "collection",
        "collectionType": "TV Season",
        "artistId": 278750007,
        "collectionId": 279175900,
        "artistName": "Rome",
        "collectionName": "Rome, Season 1",
        "collectionCensoredName": "Rome, Season 1",
        "artistViewUrl": "https://itunes.apple.com/us/tv-show/rome/id278750007?uo=4",
        "collectionViewUrl": "https://itunes.apple.com/us/tv-season/rome-season-1/id279175900?uo=4",
        "artworkUrl60": "http://is4.mzstatic.com/image/pf/us/r30/Video2/v4/8e/5d/67/8e5d6720-1da6-b8fa-d10e-262e2d68a482/mzl.lhhvljhw.60x60-50.jpg",
        "artworkUrl100": "http://is2.mzstatic.com/image/pf/us/r30/Video2/v4/8e/5d/67/8e5d6720-1da6-b8fa-d10e-262e2d68a482/mzl.lhhvljhw.100x100-75.jpg",
        "collectionPrice": 19.99,
        "collectionHdPrice": 29.99,
        "collectionExplicitness": "notExplicit",
        "contentAdvisoryRating": "TV-MA",
        "trackCount": 12,
        "copyright": "© 2005 Home Box Office, Inc.",
        "country": "USA",
        "currency": "USD",
        "releaseDate": "2008-05-12T07:00:00Z",
        "primaryGenreName": "Drama",
        "longDescription": "Every city has its secrets. HBO presents Season 1 of this epic series about generals and soldiers, masters and slaves, husbands and wives &#8212; all entwined in the furious historical events that saw the death of a republic and the birth of an empire. The season begins in 52 B.C. as Gaius Julius Caesar completes his quest of Gaul after eight years of war and prepares to return with his army to Rome. But while Caesar's self-interested niece Atia and long-lost paramour Servilia anxiously await his return, the ruling patricians despair that Caesar's homecoming will disrupt the status quo. As Caesar's legions move closer to Rome, allegiances are put to the test for both soldiers and civilians &#8212; and the escalating tensions climax with a full-scale conflict destined to change history. The ensemble cast includes Kevin McKidd, Ray Stevenson, Polly Walker, Kenneth Cranham, Tobias Menzies, James Purefoy, and Ciar&#225;n Hinds."
    };

    var staticTvShowEpisodes = {
        "resultCount": 2,
        "results": [
            {
                "wrapperType": "track",
                "kind": "tv-episode",
                "artistId": 278750007,
                "collectionId": 279175900,
                "trackId": 279753813,
                "artistName": "Rome",
                "collectionName": "Rome, Season 1",
                "trackName": "The Stolen Eagle",
                "collectionCensoredName": "Rome, Season 1",
                "trackCensoredName": "The Stolen Eagle",
                "artistViewUrl": "https://itunes.apple.com/us/tv-show/rome/id278750007?uo=4",
                "collectionViewUrl": "https://itunes.apple.com/us/tv-season/the-stolen-eagle/id279175900?i=279753813&uo=4",
                "trackViewUrl": "https://itunes.apple.com/us/tv-season/the-stolen-eagle/id279175900?i=279753813&uo=4",
                "previewUrl": "http://a1543.v.phobos.apple.com/us/r1000/038/Video2/v4/23/c3/85/23c38551-56aa-cc18-2195-b7bd5526dab6/mzvf_1547539782181340397.640x480.h264lc.D2.p.m4v",
                "artworkUrl30": "http://is3.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.40x30-75.jpg",
                "artworkUrl60": "http://is1.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.80x60-75.jpg",
                "artworkUrl100": "http://is1.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.100x100-75.jpg",
                "collectionPrice": 19.99,
                "trackPrice": 1.99,
                "collectionHdPrice": 29.99,
                "trackHdPrice": 2.99,
                "releaseDate": "2005-08-28T07:00:00Z",
                "collectionExplicitness": "notExplicit",
                "trackExplicitness": "notExplicit",
                "discCount": 1,
                "discNumber": 1,
                "trackCount": 2,
                "trackNumber": 1,
                "trackTimeMillis": 3134815,
                "country": "USA",
                "currency": "USD",
                "primaryGenreName": "Drama",
                "contentAdvisoryRating": "TV-MA",
                "shortDescription": "In the pilot episode of this series, Caesar ends eight years of war with victory in Gaul, but a personal loss at home.",
                "longDescription": "52 B.C. Eager to return to Rome after eight long years of war, Gaius Julius Caesar ends his campaign with a big triumph in Gaul--and news of a shattering personal loss at home. When his army's gold standard is stolen, Caesar's cousin and commander Mark Antony enlists two soldiers, Centurion Lucius Vorenus and Legionnaire Titus Pullo, to track it down.",
                "radioStationUrl": "https://itunes.apple.com/station/idra.279753813"
            },
            {
                "wrapperType": "track",
                "kind": "tv-episode",
                "artistId": 278750007,
                "collectionId": 279175900,
                "trackId": 279753813,
                "artistName": "Rome",
                "collectionName": "Rome, Season 1",
                "trackName": "Episode2",
                "collectionCensoredName": "Rome, Season 1",
                "trackCensoredName": "Episode2",
                "artistViewUrl": "https://itunes.apple.com/us/tv-show/rome/id278750007?uo=4",
                "collectionViewUrl": "https://itunes.apple.com/us/tv-season/the-stolen-eagle/id279175900?i=279753813&uo=4",
                "trackViewUrl": "https://itunes.apple.com/us/tv-season/the-stolen-eagle/id279175900?i=279753813&uo=4",
                "previewUrl": "http://a1543.v.phobos.apple.com/us/r1000/038/Video2/v4/23/c3/85/23c38551-56aa-cc18-2195-b7bd5526dab6/mzvf_1547539782181340397.640x480.h264lc.D2.p.m4v",
                "artworkUrl30": "http://is3.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.40x30-75.jpg",
                "artworkUrl60": "http://is1.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.80x60-75.jpg",
                "artworkUrl100": "http://is1.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.100x100-75.jpg",
                "collectionPrice": 19.99,
                "trackPrice": 1.99,
                "collectionHdPrice": 29.99,
                "trackHdPrice": 2.99,
                "releaseDate": "2005-08-28T07:00:00Z",
                "collectionExplicitness": "notExplicit",
                "trackExplicitness": "notExplicit",
                "discCount": 1,
                "discNumber": 1,
                "trackCount": 2,
                "trackNumber": 2,
                "trackTimeMillis": 3134815,
                "country": "USA",
                "currency": "USD",
                "primaryGenreName": "Drama",
                "contentAdvisoryRating": "TV-MA",
                "shortDescription": "In the pilot episode of this series, Caesar ends eight years of war with victory in Gaul, but a personal loss at home.",
                "longDescription": "52 B.C. Eager to return to Rome after eight long years of war, Gaius Julius Caesar ends his campaign with a big triumph in Gaul--and news of a shattering personal loss at home. When his army's gold standard is stolen, Caesar's cousin and commander Mark Antony enlists two soldiers, Centurion Lucius Vorenus and Legionnaire Titus Pullo, to track it down.",
                "radioStationUrl": "https://itunes.apple.com/station/idra.279753813"
            }
            ]
    };

    $scope.tvshows = [staticTvShow];
    $scope.tvshowEpisodes = [staticTvShowEpisodes];

    $scope.selectTvShow = function (selectedTvShow) {
        tvshowSelectionService.setSelectedTvShow($scope.tvshows[0]);
        tvshowSelectionService.setSelectedTvShowEpisodes($scope.tvshowEpisodes[0]);
    };

});
