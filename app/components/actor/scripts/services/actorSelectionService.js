/**
 * Created by pascal on 18/09/15.
 */
movieApp.service("actorSelectionService", function ($rootScope) {
    var actor = {};

    var getSelectedActor = function () {
        return actor;
    };

    var setSelectedActor = function (selectedActor) {
        actor = selectedActor;
    };

    return {
        getSelectedActor: getSelectedActor,
        setSelectedActor: setSelectedActor
    };
});
