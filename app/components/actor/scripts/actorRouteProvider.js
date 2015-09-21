actorApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/actor',
                {
                    templateUrl: "components/actor/views/actor.html",
                    controller: "actor-dashboard-controller"
                })
            .when("/actor/:actorId",
                {
                    templateUrl: "components/actor/views/actorDetail.html",
                    controller: "actor-detail-controller"
                });
    }]);
