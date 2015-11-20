/**
 * Created by Antoine on 2015-10-15.
 */

userApp.service("loggedUserService", function ($rootScope) {
    var loggedUser = {
        "id": "56436a20ea11a30300cdee09",
        "name": "Jo Blo",
        "email": "jo.blo@email.com"
    };

    var getLoggedUser = function () {
        return loggedUser;
    }


    return {
        getLoggedUser: getLoggedUser
    };
});