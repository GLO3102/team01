tvShowApp.factory('tvshowCommentResource', ["$resource", function($resource){
    return $resource("https://umovie-team01.herokuapp.com/tvshows/:path/:id/reviews",{} ,{
        get:{
            method:"GET",
            params:{
                id:"@id",
                path:"season"
            },
            isArray:true
        },

        post:{
          method:"POST",
        }

    });
}]);
