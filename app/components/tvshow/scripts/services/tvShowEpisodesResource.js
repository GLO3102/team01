/**
 * Created by Jean-Sebastien on 2015-10-05.
 */
tvShowApp.factory('tvShowEpisodesResource', ["$resource", function($resource){
    return $resource("https://umovie-team01.herokuapp.com/tvshows/season/:id/episodes",{} ,{
        get:{
            method:"GET",
            params:{
                id:"@id"
            }
        }
    });
}]);