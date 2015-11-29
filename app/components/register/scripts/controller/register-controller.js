registerApp.controller("register-controller", function ($scope, $location, registerResource) {
    $scope.notRegister = true;

    $scope.genres = [
        {
            "id": "4401",
            "name": "Action & Adventure"
        },
        {
            "id": "4402",
            "name": "Anime"
        },
        {
            "id": "4404",
            "name": "Comedy"
        },
        {
            "id": "4405",
            "name": "Documentary"
        },
        {
            "id": "4406",
            "name": "Drama"
        },
        {
            "id": "4408",
            "name": "Horror"
        },
        {
            "id": "4410",
            "name": "Kids & Family"
        },
        {
            "id": "4412",
            "name": "Romance"
        },
        {
            "id": "4413",
            "name": "Sci-Fi & Fantasy"
        },
        {
            "id": "4416",
            "name": "Thriller"
        }
    ]


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
            "genres": genres
        }

        registerResource.post(user, function onSuccess(data) {

            $scope.notRegister = false;

        }, function onError(data) {

            $scope.registerError = true;

        });
    }
})
