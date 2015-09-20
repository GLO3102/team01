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


    $scope.actor = [staticActor];

    $scope.selectActor = function (selectedActor){
        actorSelectionService.setSelectedActor($scope.actor[0]);
    };

});
