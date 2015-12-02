/**
 * Created by Antoine on 2015-11-11.
 */
userApp.controller("user-menu-controller", function ($scope,  loginService, logoutResource, $location) {

    $scope.userIsLogged = false;


    $scope.verifyIfUserIsLogged = function() {
        var loggedUser = loginService.getUser();

        if (Object.keys(loggedUser).length > 0) {
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