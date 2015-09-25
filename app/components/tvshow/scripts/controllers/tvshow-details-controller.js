tvShowApp.controller("tvshow-detail-controller", function ($scope, tvshowSelectionService, $routeParams) {

    var tvShowId = $routeParams.tvShowId;

    $scope.isHdPriceSelected = true;

    $scope.initTvShowDetail = function () {

        var selectedTvShow = tvshowSelectionService.getSelectedTvShow();
        var selectTvshowEpisodes = tvshowSelectionService.getSelectedTvShowEpisodes();
        if (Object.keys(selectedTvShow).length === 0) {
            /**
             * Created by Jean-Sebastien on 2015-09-17.
             */
            selectedTvShow = {
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
                "artworkUrl100": "http://is2.mzstatic.com/image/pf/us/r30/Video2/v4/8e/5d/67/8e5d6720-1da6-b8fa-d10e-262e2d68a482/mzl.lhhvljhw.500x500-75.jpg",
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
                "longDescription": "Every city has its secrets. HBO presents Season 1 of this epic series about generals and soldiers, masters and slaves, husbands and wives, all entwined in the furious historical events that saw the death of a republic and the birth of an empire. The season begins in 52 B.C. as Gaius Julius Caesar completes his quest of Gaul after eight years of war and prepares to return with his army to Rome. But while Caesar's self-interested niece Atia and long-lost paramour Servilia anxiously await his return, the ruling patricians despair that Caesar's homecoming will disrupt the status quo. As Caesar's legions move closer to Rome, allegiances are put to the test for both soldiers and civilians; and the escalating tensions climax with a full-scale conflict destined to change history. The ensemble cast includes Kevin McKidd, Ray Stevenson, Polly Walker, Kenneth Cranham, Tobias Menzies, James Purefoy, and Ciarin Hinds."
            };
        }

        if (Object.keys(selectTvshowEpisodes).length === 0) {
            selectTvshowEpisodes = {
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
                        "previewUrl": "https://www.youtube.com/watch?v=2s1RoX1OeC0",
                        "artworkUrl30": "http://is3.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.40x30-75.jpg",
                        "artworkUrl60": "http://is1.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.80x60-75.jpg",
                        "artworkUrl100": "http://is1.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.500x500-75.jpg",
                        "collectionPrice": 19.99,
                        "trackPrice": 1.99,
                        "collectionHdPrice": 29.99,
                        "trackHdPrice": 2.99,
                        "releaseDate": "2005-08-28T07:00:00Z",
                        "collectionExplicitness": "notExplicit",
                        "trackExplicitness": "notExplicit",
                        "discCount": 1,
                        "discNumber": 1,
                        "trackCount": 3,
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
                        "previewUrl": "https://www.youtube.com/watch?v=2s1RoX1OeC0",
                        "artworkUrl30": "http://is3.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.40x30-75.jpg",
                        "artworkUrl60": "http://is1.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.80x60-75.jpg",
                        "artworkUrl100": "http://is1.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.500x500-75.jpg",
                        "collectionPrice": 19.99,
                        "trackPrice": 1.99,
                        "collectionHdPrice": 29.99,
                        "trackHdPrice": 2.99,
                        "releaseDate": "2005-09-05T07:00:00Z",
                        "collectionExplicitness": "notExplicit",
                        "trackExplicitness": "notExplicit",
                        "discCount": 1,
                        "discNumber": 1,
                        "trackCount": 3,
                        "trackNumber": 2,
                        "trackTimeMillis": 3134815,
                        "country": "USA",
                        "currency": "USD",
                        "primaryGenreName": "Drama",
                        "contentAdvisoryRating": "TV-MA",
                        "shortDescription": "Episode2Desc   ot episode of this series, Caesar ends eight years of war with victory in Gaul, but a personal loss at home.",
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
                        "trackName": "Episode3",
                        "collectionCensoredName": "Rome, Season 1",
                        "trackCensoredName": "Episode2",
                        "artistViewUrl": "https://itunes.apple.com/us/tv-show/rome/id278750007?uo=4",
                        "collectionViewUrl": "https://itunes.apple.com/us/tv-season/the-stolen-eagle/id279175900?i=279753813&uo=4",
                        "trackViewUrl": "https://itunes.apple.com/us/tv-season/the-stolen-eagle/id279175900?i=279753813&uo=4",
                        "previewUrl": "https://www.youtube.com/watch?v=2s1RoX1OeC0",
                        "artworkUrl30": "http://is3.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.40x30-75.jpg",
                        "artworkUrl60": "http://is1.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.80x60-75.jpg",
                        "artworkUrl100": "http://is1.mzstatic.com/image/pf/us/r30/Video7/v4/b5/17/49/b517492a-91b2-a098-4f75-a8b467cd4fb7/mzl.unbcquai.500x500-75.jpg",
                        "collectionPrice": 19.99,
                        "trackPrice": 1.99,
                        "collectionHdPrice": 29.99,
                        "trackHdPrice": 2.99,
                        "releaseDate": "2005-09-12T07:00:00Z",
                        "collectionExplicitness": "notExplicit",
                        "trackExplicitness": "notExplicit",
                        "discCount": 1,
                        "discNumber": 1,
                        "trackCount": 3,
                        "trackNumber": 3,
                        "trackTimeMillis": 3134815,
                        "country": "USA",
                        "currency": "USD",
                        "primaryGenreName": "Drama",
                        "contentAdvisoryRating": "TV-MA",
                        "shortDescription": "Episode3Desc t episode of this series, Caesar ends eight years of war with victory in Gaul, but a personal loss at home.",
                        "longDescription": "52 B.C. Eager to return to Rome after eight long years of war, Gaius Julius Caesar ends his campaign with a big triumph in Gaul--and news of a shattering personal loss at home. When his army's gold standard is stolen, Caesar's cousin and commander Mark Antony enlists two soldiers, Centurion Lucius Vorenus and Legionnaire Titus Pullo, to track it down.",
                        "radioStationUrl": "https://itunes.apple.com/station/idra.279753813"
                    }
                ]
            };
        }


        $scope.tvshowEpisodes = selectTvshowEpisodes;
        $scope.tvshow = selectedTvShow;
    }

    $scope.showHdPrice = function(priceButtonState){
        $scope.isHdPriceSelected = priceButtonState;
    };
    $scope.initTvShowDetail();

});
