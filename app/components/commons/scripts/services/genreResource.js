/**
 * Created by Antoine on 2015-10-02.
 */
/**
 * Created by Antoine on 2015-10-02.
 */
homeApp.factory('genreResource', ["$resource", function($resource){
    return $resource("https://umovie.herokuapp.com/unsecure/genres/:type",{} ,{
        query:{
            method:"GET",
            isArray:true,
            params:{
                "type": "@type"
            }
        }
    });
}]);