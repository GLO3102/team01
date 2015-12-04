userApp.factory('userResource', ['$resource', function($resource){
    return $resource("https://umovie-team01.herokuapp.com/users/:userId/", {}, {

    });
}]);