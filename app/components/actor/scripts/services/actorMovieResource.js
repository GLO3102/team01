actorApp.factory('actorMovieResource', ["$resource", function($resource){
  return $resource("https://umovie-team01-staging.herokuapp.com/unsecure/actors/:id/movies", {}, {
    get:{
      method:"GET",
      params:{
        id:"@id"
      }
    }
  });
}]);
