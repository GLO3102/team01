actorApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/actors', {"templateUrl": "components/actor/views/actors.html"}).otherwise({redirectTo: '/'});

    }]);
