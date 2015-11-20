userApp.factory('userResource', ['$resource', function($resource){
    return $resource("https://umovie-team01-staging.herokuapp.com/unsecure/users/:userId/", {}, {

    });
}]);