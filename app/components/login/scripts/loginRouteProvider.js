homeApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: "components/login/views/login.html",
            controller: "login-controller"
        }).otherwise({redirectTo: '/'});

    }]);
