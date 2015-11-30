/**
 * Created by Antoine on 2015-10-02.
 */
movieApp.factory('movieResource', ["$resource", function($resource){
    return $resource("https://umovie-team01.herokuapp.com/movies/:id",{} ,{
        get:{
            method:"GET",
            params:{
                id:"@id"
            }
        }

    });
}]);
