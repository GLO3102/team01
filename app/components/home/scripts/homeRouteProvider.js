homeApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: "components/home/views/home.html",
            controller: "home-controller"
        }).otherwise({redirectTo: '/'});
    }]);
