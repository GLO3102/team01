/**
 * Created by pascal on 18/09/15.
 */
actorApp.controller("actor-dashboard-controller", function ($scope, actorSelectionService, actorResource) {

    $scope.actor = selectedActor;

    $scope.selectActor = function (selectedActor){
        actorSelectionService.setSelectedActor(selectedActor);
    };

});
