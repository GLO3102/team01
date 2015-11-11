/**
 * Created by Antoine on 2015-11-11.
 */
userApp.controller("user-menu-controller", function ($scope,  loggedUserService) {

    $scope.userIsLogged = false;


    $scope.verifyIfUserIsLogged = function() {
        var loggedUser = loggedUserService.getLoggedUser();

        if (Object.keys(loggedUser).length > 0) {
            $scope.userIsLogged = true;
            $scope.loggedUser = loggedUser;
        }
    }
    $scope.verifyIfUserIsLogged();
});