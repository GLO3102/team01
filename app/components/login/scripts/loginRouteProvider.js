homeApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/login', {
            templateUrl: "components/login/views/login.html",
        })
            .when('/', {
            templateUrl: "components/login/views/login.html",
        }).otherwise({redirectTo: '/home'});

    }]);
