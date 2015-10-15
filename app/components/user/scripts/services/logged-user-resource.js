/**
 * Created by Antoine on 2015-10-15.
 */

userApp.service("loggedUserService", function ($rootScope) {
    var loggedUser= "jo.blo@email.com";

    var getLoggedUser = function(){
        return loggedUser;
    }


    return {
        getLoggedUser: getLoggedUser
    };
});