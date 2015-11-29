userApp.factory('logoutResource', ["$resource", function($resource){
    return $resource("https://umovie-team01.herokuapp.com/logout" , {}, {
        logout:{
            method:'GET'
        }
    });
}]);
