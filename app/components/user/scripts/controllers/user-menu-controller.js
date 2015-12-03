/**
 * Created by Antoine on 2015-11-11.
 */
userApp.controller("user-menu-controller", function ($scope, logoutResource, $location, loginService) {

    $scope.userIsLogged = false;


    $scope.verifyIfUserIsLogged = function() {
        var loggedUser = loginService.getUser();

        if (loggedUser && Object.keys(loggedUser).length > 0) {
            $scope.userIsLogged = true;
            $scope.loggedUser = loggedUser;
        }
    }
    $scope.verifyIfUserIsLogged();

    $scope.logout = function(){
        loginService.ClearUser();
        logoutResource.logout();
        $location.path("/login");
    }
});