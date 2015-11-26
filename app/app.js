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
    'uMovie.actor',
    "uMovie.search",
    "uMovie.about",
    "ngModal",
    "ui.gravatar"
]).config(function(ngModalDefaultsProvider) {
    ngModalDefaultsProvider.set('closeButtonHtml', '<a class="glyphicon glyphicon-remove pull-right"></a>');
});
