/**
 * Created by Jean-Sebastien on 2015-11-30.
 */
movieApp.factory('movieSimilarResource', ["$resource", function($resource){
    return $resource("https://umovie-team01.herokuapp.com/unsecure/similar/movies/:id",{} ,{
        get:{
            method:"GET",
            isArray:true,
            params:{
                id:"@id"
            }
        }
    });
}]);
