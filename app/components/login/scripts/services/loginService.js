loginApp.factory('loginService', ["loginResource", "$cookies", "$rootScope", function(loginResource, $cookies, $rootScope){

  function setUser(user) {
    $rootScope.user = user;
    $cookies.putObject("user", $rootScope.user);
  }

  function clearUser(){
    $rootScope.user = {};
    $cookies.remove('user');
  }

  return {
      SetUser: setUser,
      ClearUser: clearUser
  };
}])
