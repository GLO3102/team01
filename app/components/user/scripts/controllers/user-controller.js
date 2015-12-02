/**
 * Created by Antoine on 2015-10-15.
 */
userApp.controller("user-controller", function ($scope, $routeParams, userResource, loginService, userFollowingResource) {
    var userID = $routeParams.userId;

    $scope.isLoading = false;

    var fetchUserInformation = function () {
        $scope.isLoading = true;
        userResource.get({userId: userID}, function onSuccess(data) {
            $scope.user = data;
            $scope.isLoading = false;
        })
    };

    fetchUserInformation();

    $scope.addFriend = function (user) {
        userFollowingResource.follow({}, {id: user.id}, function onSuccess() {
            var loggedUser = loginService.getUser();
            loggedUser.following.push(user);
            loginService.SetUser(loggedUser);
        });
    };
    $scope.isNotLoggedUser = function (user) {
        var loggedUser = loginService.getUser();
        if (user.username === loggedUser.username) {
            return false;
        }
        return true;
    }
});