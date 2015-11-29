/**
 * Created by Antoine on 2015-10-15.
 */
userApp.controller("user-controller", function ($scope,  $routeParams, userResource) {
    var userID =  $routeParams.userId;

    $scope.isLoading = false;

    var fetchUserInformation = function(){
        $scope.isLoading = true;
        userResource.get({userId: userID}, function onSuccess(data){
            $scope.user = data;
            $scope.isLoading = false;
        })
    }
    fetchUserInformation();

});