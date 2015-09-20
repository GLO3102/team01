/**
 * Created by pascal on 18/09/15.
 */
actorApp.controller("actor-detail-controller", function ($scope, actorSelectionService) {

    $scope.actor = actorSelectionService.getSelectedActor();

});
