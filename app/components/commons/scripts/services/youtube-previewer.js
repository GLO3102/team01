/**
 * Created by Antoine on 2015-10-09.
 */
homeApp.factory('youtubePreviewer', ["$resource", function($resource){
    return $resource("http://gdata.youtube.com/feeds/api/videos",{} ,{
        query:{
            method:"GET",
            isArray:true,
            params: {
                "alt": "json"
            }
        }
    });
}]);