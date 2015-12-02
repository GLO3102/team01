/**
 * Created by Antoine on 12/2/2015.
 */
userApp.factory('userFollowingResource', ['$resource', function($resource){
    return $resource("https://umovie-team01.herokuapp.com/follow/:id", {}, {
        follow : {
            method:"POST"
        },
        deleteFriend:{
            method:"DELETE",
            params:{
                "@id":"id"
            }
        }
    });
}]);