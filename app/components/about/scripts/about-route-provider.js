/**
 * Created by Jean-Sebastien on 2015-11-26.
 */
userApp.
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when("/about",
            {
                templateUrl: "components/about/views/about.html",
                controller: "about-controller"
            })
    }]);