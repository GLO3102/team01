'use strict';

// Declare app level module which depends on views, and components
var homeApp = angular.module('uMovie', [
    'ngRoute',
    'ngResource',
    'oblador.lazytube',
    'uMovie.user',
    'slickCarousel',
    'uMovie.movie',
    'uMovie.tvshow',
    'uMovie.actor'
]);

