actorApp.factory('actorResource', ["$resource", "$cookies", function($resource, $cookies){
      return $resource("https://umovie-team01.herokuapp.com/actors/:id",{},{
        get:{
          method:"GET",
          headers:{"authorization":$cookies.getObject("user").token},
          params:{
            id:"@id"
          }
      }
  });
}]);
