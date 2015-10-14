/**
 * Created by pascal on 18/09/15.
 */
actorApp.controller("actor-dashboard-controller", function ($scope, actorSelectionService) {

    $scope.actor = selectedActor;

    $scope.selectActor = function (selectedActor){
        actorSelectionService.setSelectedActor($scope.actor[0]);
    };

});
