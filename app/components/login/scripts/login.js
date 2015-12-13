'use strict';

var loginApp = angular.module('uMovie.login', ['ngRoute', 'ngCookies', 'satellizer'])
    .config(function($authProvider) {

    $authProvider.facebook({
        url: 'http://umovie-team01.herokuapp.com/auth/facebook',
        clientId: '1238688256158355'
    });

    $authProvider.google({
        url: 'http://umovie-team01.herokuapp.com/auth/google',
        clientId: '482839083215-is2a3iqcbmuce08sjeeg71g4i4d4t3a4.apps.googleusercontent.com'
    });
});
