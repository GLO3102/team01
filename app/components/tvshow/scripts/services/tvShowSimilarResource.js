/**
 * Created by Jean-Sebastien on 2015-11-30.
 */
tvShowApp.factory('tvShowSimilarResource', ["$resource", function($resource){
    return $resource("https://umovie-team01.herokuapp.com/similar/tvshows/:id",{} ,{
        get:{
            method:"GET",
            isArray:true,
            params:{
                id:"@id"
            }
        }
    });
}]);
