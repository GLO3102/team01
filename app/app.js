'use strict';

// Declare app level module which depends on views, and components
var homeApp = angular.module('uMovie', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'oblador.lazytube',
    'uMovie.user',
    'slickCarousel',
    'uMovie.movie',
    'uMovie.tvshow',
    'uMovie.actor',
    "uMovie.search",
    "uMovie.about",
    "ngModal",
    "ui.gravatar",
    "uMovie.login",
    "uMovie.register",
    "validation.match",
    "satellizer",
    "youtube-embed"
]).config(function (ngModalDefaultsProvider) {
    ngModalDefaultsProvider.set('closeButtonHtml', '<a class="glyphicon glyphicon-remove pull-right"></a>');
}).run(['$rootScope', '$cookies', '$location', function ($rootScope, $cookies, $location) {

    if ($cookies.getObject('user') != null) {
        $rootScope.user = $cookies.getObject('user');
    }

    $rootScope.$on("$routeChangeStart", function (event, next, current) {

        if ($cookies.getObject('user') == null) {
            if (next.templateUrl != "components/login/views/login.html" && next.templateUrl != "components/register/views/register.html") {
                // not going to #login, we should redirect now
                $location.path("/login");
            }
        }
    });
}]);
