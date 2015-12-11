registerApp.controller("register-controller", function ($scope, $location, registerResource) {
    $scope.notRegister = true;

    $scope.register = function () {
        var genres = [];
        for (var genre in $scope.genres)
            if ($scope.genres[genre].selected) {
                genres.push($scope.genres[genre].id);
            }
        var user = {
            "email": $scope.email,
            "password": $scope.password,
            "firstname": $scope.firstName,
            "lastname": $scope.lastName,
            "username": $scope.username,
        }

        registerResource.post(user, function onSuccess(data) {

          $location.path("/login");

        }, function onError(data) {

            $location.path("/lost");

        });
    }
})
