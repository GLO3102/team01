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
        "radioStationUrl": "https://itunes.apple.com/station/idra.253584821",
        "bio": "John Sawyer is an Oscar-winning actress who became popular after playing the title role in the \"Lara Croft\" blockbuster movies, as well as Mr. & Mrs. Smith (2005), Wanted (2008), Salt (2010) and Maleficent (2014). Off-screen, Jolie has become prominently involved in international charity projects, especially those involving refugees. She often appears on many \"most beautiful women\" lists, and she has a personal life that is avidly covered by the tabloid press."
    };


    $scope.actor = [staticActor];

    $scope.selectActor = function (selectedActor){
        actorSelectionService.setSelectedActor($scope.actor[0]);
    };

});
