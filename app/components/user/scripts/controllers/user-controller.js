/**
 * Created by Antoine on 2015-10-15.
 */
userApp.controller("user-controller", function ($scope, $routeParams, userResource, loginService, userFollowingResource) {
    var userID = $routeParams.userId;

    $scope.isLoading = true;
    var fetchUserInformation = function () {
        $scope.isLoading = true;
        userResource.get({userId: userID}, function onSuccess(data) {
            $scope.user = data;
            $scope.isLoading = false;

        });
    };

    setTimeout(fetchUserInformation(), 1000);

    $scope.addFriend = function (user) {
        $scope.isLoading = true;
        userFollowingResource.follow({}, {id: user.id}, function onSuccess() {
            var loggedUser = loginService.getUser();
            loggedUser.following.push(user);
            loginService.SetUser(loggedUser);
            $scope.isLoading = false;
        });
    };
    $scope.isNotLoggedUser = function (user) {
        var loggedUser = loginService.getUser();
        console.log(loggedUser);
        if (user.id === loggedUser.id) {
            return false;
        }
        return true;
    };
    $scope.isInFollowing = function (user) {
        var loggedUser = loginService.getUser();

        if ($scope.isNotLoggedUser(user)) {
            for (var i = 0; i < loggedUser.following.length; i++) {
                if (loggedUser.following[i].id === user.id) {
                    return true;
                }
            }
        }
        return false;
    }
    $scope.deleteFriend = function (user) {
        $scope.isLoading = true;
        userFollowingResource.deleteFriend({id: user.id}, function onSuccess(data) {
            if (!$scope.isNotLoggedUser($scope.user)) {
                console.log(data);
                $scope.user = data;
            }
            else {
                var loggedUser = loginService.getUser();
                loggedUser.following = data.following;
                console.log(loggedUser);
                loginService.SetUser(loggedUser);
                $scope.isLoading = false;
            }

        }, function onError(data) {
            $scope.isLoading = false;
        });

    };

    $scope.slickFeatureConfig = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }]
    };
});