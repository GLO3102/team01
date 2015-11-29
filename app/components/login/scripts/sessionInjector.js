homeApp.factory('sessionInjector',['$q', '$cookies', function($q, $cookies){
    var sessionInjector = {
        request: function(request) {
            if (request.url.indexOf("umovie-team01.herokuapp.com") > -1 && request.url.indexOf("login") == -1 && request.url.indexOf("logout") == -1 && request.url.indexOf("register") == -1) {
                console.log(request.url);
                request.headers['authorization'] = $cookies.getObject("user").token;
            }
            return request;
        }
    };
    return sessionInjector;
}])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('sessionInjector');
}]);
