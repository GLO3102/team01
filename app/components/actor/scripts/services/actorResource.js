actorApp.factory('actorResource', ["$resource", "$cookies", function($resource, $cookies){
  return{
    actor:function(token){
      return $resource("https://umovie-team01.herokuapp.com/actors/:id",{},{
        get:{
          method:"GET",
          headers:{"autorization":token},
          params:{
            id:"@id"
          }
      }
  });}}
}]);
