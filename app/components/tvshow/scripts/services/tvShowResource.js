/**
 * Created by Jean-Sebastien on 2015-10-05.
 */
tvShowApp.factory('tvShowResource', ["$resource", function($resource){
    return $resource("https://umovie-team01.herokuapp.com/unsecure/tvshows/season/:id",{} ,{
        get:{
            method:"GET",
            params:{
                id:"@id"
            }
        }
    });
}]);