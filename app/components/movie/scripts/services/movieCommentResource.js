movieApp.factory('movieCommentResource', ["$resource", function($resource){
    return $resource("https://umovie-team01.herokuapp.com/movies/:id/reviews",{} ,{
        get:{
            method:"GET",
            params:{
                id:"@id"
            },
            isArray:true
        },

        post:{
          method:"POST"
        }

    });
}]);
