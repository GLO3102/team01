actorApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/actor', {"templateUrl": "components/actor/views/actor.html"}).otherwise({redirectTo: '/'});

    }]);
