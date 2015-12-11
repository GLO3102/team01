
homeApp.factory('genreResource', ["$resource", function($resource){
    return $resource("https://umovie-team01.herokuapp.com/genres/:type",{} ,{
        query:{
            method:"GET",
            isArray:true,
            params:{
                "type": "@type"
            }
        }
    });
}]);