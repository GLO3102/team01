actorApp.service("actorSelectionService", function ($rootScope) {
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
