actorApp.factory('actorResource', ["$resource", "$cookies", function($resource, $cookies){
      return $resource("https://umovie-team01.herokuapp.com/actors/:id",{},{
        get:{
          method:"GET",
          params:{
            id:"@id"
          }
      }
  });
}]);
